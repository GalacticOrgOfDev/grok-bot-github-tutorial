import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { Quiz } from '../modules/types';
import { scoreQuiz, type AnswerMap } from '../shared/quizScoring';
import { colors } from '../theme/colors';
import { PrimaryButton } from './PrimaryButton';

export function QuizPanel({
  quiz,
  onFinished,
}: {
  quiz: Quiz;
  onFinished: (correct: number, total: number, passed: boolean) => void;
}) {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<ReturnType<typeof scoreQuiz> | null>(null);

  function submit() {
    const scored = scoreQuiz(quiz, answers);
    setResult(scored);
    onFinished(scored.correctCount, scored.total, scored.passed);
  }

  function retry() {
    setAnswers({});
    setResult(null);
  }

  if (result) {
    const wrong = result.details.filter((d) => !d.correct);
    return (
      <View style={styles.wrap}>
        <Text style={styles.big}>
          {result.correctCount}/{result.total} —{' '}
          {result.passed ? 'Passed' : 'Not yet'}
        </Text>
        <Text style={styles.sub}>
          Need {Math.ceil(quiz.passScore * quiz.questions.length)} correct (
          {Math.round(quiz.passScore * 100)}%).
        </Text>
        {wrong.length > 0 && (
          <View style={styles.review}>
            <Text style={styles.section}>Review missed</Text>
            {wrong.map((w) => (
              <View key={w.questionId} style={styles.miss}>
                <Text style={styles.stem}>{w.stem}</Text>
                <Text style={styles.exp}>{w.explanation}</Text>
              </View>
            ))}
          </View>
        )}
        {!result.passed && <PrimaryButton title="Retry quiz" onPress={retry} />}
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      {quiz.questions.map((q, i) => (
        <View key={q.id} style={styles.card}>
          <Text style={styles.qnum}>
            Q{i + 1}. {q.stem}
          </Text>
          {q.kind === 'mc' &&
            q.options?.map((o) => (
              <Pressable
                key={o.id}
                style={[
                  styles.option,
                  answers[q.id] === o.id && styles.optionOn,
                ]}
                onPress={() => setAnswers((a) => ({ ...a, [q.id]: o.id }))}
              >
                <Text style={styles.optionText}>
                  {o.id}. {o.text}
                </Text>
              </Pressable>
            ))}
          {q.kind === 'short' && (
            <TextInput
              style={styles.input}
              multiline
              placeholder="Short answer…"
              placeholderTextColor={colors.textMuted}
              value={answers[q.id] ?? ''}
              onChangeText={(t) => setAnswers((a) => ({ ...a, [q.id]: t }))}
            />
          )}
        </View>
      ))}
      <PrimaryButton title="Submit quiz" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  big: { color: colors.text, fontSize: 22, fontWeight: '800' },
  sub: { color: colors.textMuted },
  review: { gap: 8 },
  section: { color: colors.accent, fontWeight: '800', fontSize: 16 },
  miss: {
    backgroundColor: colors.surface,
    padding: 12,
    borderRadius: 12,
    borderColor: colors.border,
    borderWidth: 1,
  },
  stem: { color: colors.text, fontWeight: '600', marginBottom: 4 },
  exp: { color: colors.textMuted },
  card: {
    backgroundColor: colors.surface,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  qnum: { color: colors.text, fontSize: 15, lineHeight: 22, marginBottom: 8 },
  option: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  optionOn: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  optionText: { color: colors.text, fontSize: 15 },
  input: {
    minHeight: 80,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    color: colors.text,
    backgroundColor: colors.surfaceAlt,
    textAlignVertical: 'top',
  },
});
