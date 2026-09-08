import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PracticePanel } from '../components/PracticePanel';
import { PrimaryButton } from '../components/PrimaryButton';
import { QuizPanel } from '../components/QuizPanel';
import { VideoPlayer } from '../components/VideoPlayer';
import { getModule } from '../modules';
import { useProgress } from '../shared/ProgressContext';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

export function LessonScreen({ navigation, route }: Props) {
  const { moduleId, lessonId } = route.params;
  const bundle = getModule(moduleId);
  const { completeLesson, recordPractice, recordQuiz } = useProgress();

  if (!bundle) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.text}>Missing module</Text>
      </SafeAreaView>
    );
  }

  const meta = bundle.lessonMeta.find((l) => l.id === lessonId);
  const order = bundle.lessonMeta.map((l) => l.id);
  const idx = order.indexOf(lessonId);
  const nextId = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;

  function goNext() {
    completeLesson(moduleId, lessonId);
    if (nextId) {
      navigation.replace('Lesson', { moduleId, lessonId: nextId });
    } else {
      navigation.navigate('Module', { moduleId });
    }
  }

  const video = bundle.videos[lessonId];
  const lesson = bundle.lessons[lessonId];
  const practice =
    lessonId === 'm1-practice-capstone'
      ? bundle.practices['practice-capstone']
      : lesson?.practiceId
        ? bundle.practices[lesson.practiceId]
        : null;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.kicker}>{meta?.type?.toUpperCase()}</Text>
        <Text style={styles.title}>{meta?.title ?? lessonId}</Text>

        {video && (
          <VideoPlayer
            video={video}
            onComplete={() => {
              completeLesson(moduleId, lessonId);
              goNext();
            }}
          />
        )}

        {lesson && (
          <View style={styles.block}>
            {lesson.sections.map((s, i) => (
              <View key={i} style={styles.section}>
                {s.heading ? (
                  <Text style={styles.heading}>{s.heading}</Text>
                ) : null}
                <Text style={styles.body}>{s.body}</Text>
                {s.bullets?.map((b) => (
                  <Text key={b} style={styles.bullet}>
                    • {b}
                  </Text>
                ))}
                {s.uiPath ? (
                  <Text style={styles.uiPath}>UI: {s.uiPath}</Text>
                ) : null}
                {s.promptExample ? (
                  <View style={styles.chip}>
                    <Text style={styles.chipText}>{s.promptExample}</Text>
                  </View>
                ) : null}
                {s.callout ? (
                  <Text
                    style={[
                      styles.callout,
                      s.callout.kind === 'warn' && { color: colors.warn },
                      s.callout.kind === 'tip' && { color: colors.success },
                      s.callout.kind === 'info' && { color: colors.info },
                    ]}
                  >
                    {s.callout.kind.toUpperCase()}: {s.callout.text}
                  </Text>
                ) : null}
              </View>
            ))}
            {!practice && (
              <PrimaryButton title="Mark complete & continue" onPress={goNext} />
            )}
          </View>
        )}

        {practice && lessonId !== 'm1-test' && (
          <View style={styles.block}>
            <Text style={styles.heading}>{practice.title}</Text>
            <PracticePanel
              drill={practice}
              onPassed={(score) => {
                recordPractice(moduleId, practice.id, score);
                completeLesson(moduleId, lessonId);
              }}
            />
            <View style={{ height: 8 }} />
            <PrimaryButton title="Continue" onPress={goNext} variant="ghost" />
          </View>
        )}

        {lessonId === 'm1-test' && (
          <QuizPanel
            quiz={bundle.quiz}
            onFinished={(correct, total, passed) => {
              recordQuiz(moduleId, correct, total, passed);
              if (passed) completeLesson(moduleId, lessonId);
            }}
          />
        )}

        {lessonId === 'm1-test' && (
          <View style={{ marginTop: 12 }}>
            <PrimaryButton title="Continue" onPress={goNext} variant="ghost" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 16, gap: 12, paddingBottom: 40 },
  kicker: { color: colors.accent, fontWeight: '800', letterSpacing: 1 },
  title: { color: colors.text, fontSize: 24, fontWeight: '900', marginBottom: 8 },
  text: { color: colors.text, padding: 16 },
  block: { gap: 12 },
  section: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  heading: { color: colors.text, fontSize: 17, fontWeight: '800' },
  body: { color: colors.text, fontSize: 15, lineHeight: 22 },
  bullet: { color: colors.textMuted, fontSize: 14, lineHeight: 20 },
  uiPath: {
    color: colors.info,
    fontSize: 13,
    fontFamily: 'monospace',
  },
  chip: {
    backgroundColor: colors.chip,
    padding: 10,
    borderRadius: 10,
  },
  chipText: { color: colors.info, fontFamily: 'monospace', fontSize: 13 },
  callout: { fontSize: 13, lineHeight: 18, fontWeight: '600' },
});
