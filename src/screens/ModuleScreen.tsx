import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProgressBar } from '../components/ProgressBar';
import { getModule } from '../modules';
import { lessonVisibleAtDepth } from '../shared/schema';
import { useProgress } from '../shared/ProgressContext';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Module'>;

export function ModuleScreen({ navigation, route }: Props) {
  const { moduleId } = route.params;
  const bundle = getModule(moduleId);
  const { depth, moduleProgress } = useProgress();

  if (!bundle) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.empty}>Module not available yet.</Text>
      </SafeAreaView>
    );
  }

  const mp = moduleProgress(moduleId);
  const visible = bundle.lessonMeta.filter((l) =>
    lessonVisibleAtDepth(l.depths, depth),
  );
  const ratio =
    visible.length === 0
      ? 0
      : visible.filter((l) => mp.completedLessonIds.includes(l.id)).length /
        visible.length;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>{bundle.manifest.title}</Text>
        <Text style={styles.sub}>{bundle.manifest.subtitle}</Text>
        <ProgressBar ratio={ratio} label="Module progress" />
        <Text style={styles.objTitle}>Objectives</Text>
        {bundle.manifest.objectives.slice(0, 3).map((o) => (
          <Text key={o} style={styles.obj}>
            • {o}
          </Text>
        ))}
      </View>
      <FlatList
        data={visible}
        keyExtractor={(l) => l.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        renderItem={({ item, index }) => {
          const done = mp.completedLessonIds.includes(item.id);
          return (
            <Pressable
              style={styles.row}
              onPress={() =>
                navigation.navigate('Lesson', {
                  moduleId,
                  lessonId: item.id,
                })
              }
            >
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{index + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowMeta}>
                  {item.type} · ~{item.estMinutes} min
                  {done ? ' · done' : ''}
                </Text>
              </View>
              <Text style={styles.chev}>{done ? '✓' : '›'}</Text>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: { padding: 16, gap: 6 },
  title: { color: colors.text, fontSize: 22, fontWeight: '900' },
  sub: { color: colors.textMuted, marginBottom: 8 },
  objTitle: { color: colors.accent, fontWeight: '800', marginTop: 8 },
  obj: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  empty: { color: colors.text, padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: colors.text, fontWeight: '800' },
  rowTitle: { color: colors.text, fontWeight: '700', fontSize: 15 },
  rowMeta: { color: colors.textMuted, marginTop: 2, fontSize: 12 },
  chev: { color: colors.accent, fontSize: 20, fontWeight: '800' },
});
