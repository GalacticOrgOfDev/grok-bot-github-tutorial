import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Depth } from '../modules/types';
import { colors } from '../theme/colors';

const OPTIONS: { id: Depth; label: string }[] = [
  { id: 'skim', label: 'Skim' },
  { id: 'solid', label: 'Solid' },
  { id: 'deep', label: 'Deep' },
];

export function DepthSelector({
  value,
  onChange,
}: {
  value: Depth;
  onChange: (d: Depth) => void;
}) {
  return (
    <View style={styles.row}>
      {OPTIONS.map((o) => {
        const active = o.id === value;
        return (
          <Pressable
            key={o.id}
            onPress={() => onChange(o.id)}
            style={[styles.chip, active && styles.chipActive]}
            accessibilityRole="button"
          >
            <Text style={[styles.label, active && styles.labelActive]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8 },
  chip: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.accent,
  },
  label: { color: colors.textMuted, fontWeight: '600', fontSize: 15 },
  labelActive: { color: colors.text },
});
