import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DepthSelector } from '../components/DepthSelector';
import { ProgressBar } from '../components/ProgressBar';
import { allManifests } from '../modules';
import { useProgress } from '../shared/ProgressContext';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function statusLabel(status: string, estMinutes: number): string {
  if (status === 'live') return `~${estMinutes} min · live`;
  if (status === 'stub') return 'Stub · coming later';
  return 'Coming soon';
}


export function HomeScreen({ navigation }: Props) {
  const { depth, changeDepth, moduleProgress, ready } = useProgress();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.kicker}>Grok Bot + *</Text>
        <Text style={styles.title}>Mobile tutorials</Text>
        <Text style={styles.sub}>
          Touch-first Modules 1–4 for specialists on the go. Offline lesson
          content; live connectors only where drills need them. Depth filter
          Skim / Solid / Deep still applies.
        </Text>
        <Text style={styles.depthLabel}>Depth</Text>
        <DepthSelector value={depth} onChange={changeDepth} />
      </View>

      {!ready ? (
        <Text style={styles.sub}>Loading progress…</Text>
      ) : (
        <FlatList
          data={allManifests}
          keyExtractor={(m) => m.moduleId}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          renderItem={({ item }) => {
            const mp = moduleProgress(item.moduleId);
            const total = item.lessonOrder.length || 1;
            const live = item.status === 'live';
            const ratio = live ? mp.completedLessonIds.length / total : 0;
            return (
              <Pressable
                disabled={!live}
                onPress={() =>
                  navigation.navigate('Module', { moduleId: item.moduleId })
                }
                style={[styles.card, !live && styles.cardDisabled]}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSub}>{item.subtitle}</Text>
                <Text style={styles.meta}>
                  {statusLabel(item.status, item.estMinutes)}
                </Text>
                {live && (
                  <ProgressBar
                    ratio={ratio}
                    label={`${mp.completedLessonIds.length}/${total} lessons`}
                  />
                )}
              </Pressable>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: 16, paddingTop: 8, gap: 8 },
  kicker: { color: colors.accent, fontWeight: '800', letterSpacing: 1 },
  title: { color: colors.text, fontSize: 28, fontWeight: '900' },
  sub: { color: colors.textMuted, lineHeight: 20, marginBottom: 4 },
  depthLabel: { color: colors.textMuted, fontWeight: '600', marginTop: 4 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  cardDisabled: { opacity: 0.55 },
  cardTitle: { color: colors.text, fontSize: 18, fontWeight: '800' },
  cardSub: { color: colors.textMuted, lineHeight: 20 },
  meta: { color: colors.info, fontWeight: '600' },
});
