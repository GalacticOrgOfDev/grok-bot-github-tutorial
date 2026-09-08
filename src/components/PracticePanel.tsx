import { useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { PracticeDrill } from '../modules/types';
import { colors } from '../theme/colors';
import { PrimaryButton } from './PrimaryButton';

export function PracticePanel({
  drill,
  onPassed,
}: {
  drill: PracticeDrill;
  onPassed: (score: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string | boolean | number>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    return drill.checks.reduce((n, c) => (feedback[c.id] ? n + 1 : n), 0);
  }, [drill.checks, feedback]);

  function gradeAll() {
    const next: Record<string, boolean> = {};
    for (const c of drill.checks) {
      const a = answers[c.id];
      if (c.kind === 'mc') next[c.id] = a === c.correctIndex;
      else if (c.kind === 'boolean' || c.kind === 'self-check')
        next[c.id] = a === c.correctBoolean;
      else if (c.kind === 'text')
        next[c.id] = c.grade ? c.grade(String(a ?? '')) : false;
      else next[c.id] = false;
    }
    setFeedback(next);
    setSubmitted(true);
    const s = Object.values(next).filter(Boolean).length;
    if (s >= drill.passThreshold) onPassed(s);
  }

  return (
    <View style={styles.wrap}>
      {drill.blurb ? <Text style={styles.blurb}>{drill.blurb}</Text> : null}
      <Text style={styles.goal}>{drill.goal}</Text>

      {drill.steps.map((s, i) => (
        <View key={s.id} style={styles.step}>
          <Text style={styles.stepTitle}>
            Step {i + 1}. {s.instruction}
          </Text>
          {s.promptChip ? (
            <View style={styles.chip}>
              <Text style={styles.chipText}>{s.promptChip}</Text>
            </View>
          ) : null}
          {s.hint ? <Text style={styles.hint}>{s.hint}</Text> : null}
        </View>
      ))}

      <Text style={styles.section}>Check your work</Text>
      {drill.checks.map((c) => (
        <View key={c.id} style={styles.check}>
          <Text style={styles.prompt}>{c.prompt}</Text>
          {c.kind === 'mc' &&
            c.options?.map((opt, idx) => (
              <Pressable
                key={opt}
                style={[
                  styles.option,
                  answers[c.id] === idx && styles.optionOn,
                ]}
                onPress={() => setAnswers((a) => ({ ...a, [c.id]: idx }))}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </Pressable>
            ))}
          {(c.kind === 'boolean' || c.kind === 'self-check') && (
            <View style={styles.row}>
              {[true, false].map((v) => (
                <Pressable
                  key={String(v)}
                  style={[
                    styles.option,
                    styles.half,
                    answers[c.id] === v && styles.optionOn,
                  ]}
                  onPress={() => setAnswers((a) => ({ ...a, [c.id]: v }))}
                >
                  <Text style={styles.optionText}>
                    {c.kind === 'self-check'
                      ? v
                        ? 'Yes — done'
                        : 'Not yet'
                      : v
                        ? 'Yes'
                        : 'No'}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
          {c.kind === 'text' && (
            <TextInput
              style={styles.input}
              multiline
              placeholder="Type your answer…"
              placeholderTextColor={colors.textMuted}
              value={String(answers[c.id] ?? '')}
              onChangeText={(t) => setAnswers((a) => ({ ...a, [c.id]: t }))}
            />
          )}
          {submitted && (
            <Text
              style={{
                color: feedback[c.id] ? colors.success : colors.danger,
                marginTop: 6,
              }}
            >
              {feedback[c.id] ? 'Correct. ' : 'Not quite. '}
              {c.explanation}
            </Text>
          )}
        </View>
      ))}

      <PrimaryButton title={submitted ? 'Recheck' : 'Submit answers'} onPress={gradeAll} />
      {submitted && (
        <Text style={styles.score}>
          Score {score}/{drill.checks.length} — need {drill.passThreshold} to pass
          {score >= drill.passThreshold ? ' ✓' : ''}
        </Text>
      )}
      {!submitted || score < drill.passThreshold ? (
        <View style={styles.hints}>
          {drill.failHints.map((h) => (
            <Text key={h} style={styles.hint}>
              Hint: {h}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  blurb: {
    color: colors.warn,
    backgroundColor: colors.surfaceAlt,
    padding: 12,
    borderRadius: 12,
    lineHeight: 20,
  },
  goal: { color: colors.text, fontSize: 16, fontWeight: '700' },
  step: {
    backgroundColor: colors.surface,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stepTitle: { color: colors.text, fontSize: 15, lineHeight: 22 },
  chip: {
    marginTop: 8,
    backgroundColor: colors.chip,
    padding: 10,
    borderRadius: 10,
  },
  chipText: { color: colors.info, fontFamily: 'monospace', fontSize: 13 },
  hint: { color: colors.textMuted, marginTop: 6, fontSize: 13 },
  section: { color: colors.accent, fontWeight: '800', marginTop: 8, fontSize: 16 },
  check: { marginBottom: 8 },
  prompt: { color: colors.text, marginBottom: 8, fontSize: 15, lineHeight: 22 },
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
  row: { flexDirection: 'row', gap: 8 },
  half: { flex: 1 },
  input: {
    minHeight: 90,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    color: colors.text,
    backgroundColor: colors.surfaceAlt,
    textAlignVertical: 'top',
  },
  score: { color: colors.text, fontWeight: '700', textAlign: 'center' },
  hints: { gap: 4 },
});
