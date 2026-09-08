import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export function ProgressBar({ ratio, label }: { ratio: number; label?: string }) {
  const pct = Math.max(0, Math.min(1, ratio));
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: colors.textMuted, marginBottom: 6, fontSize: 13 },
  track: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceAlt,
    overflow: 'hidden',
  },
  fill: { height: '100%', backgroundColor: colors.accent },
});
