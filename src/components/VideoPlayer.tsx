import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { VideoLesson } from '../modules/types';
import { colors } from '../theme/colors';
import { PrimaryButton } from './PrimaryButton';

export function VideoPlayer({
  video,
  onComplete,
}: {
  video: VideoLesson;
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = video.slides[index];
  const totalSec = useMemo(
    () => video.slides.reduce((s, x) => s + x.durationSec, 0),
    [video.slides],
  );
  const completedSec = useMemo(
    () =>
      video.slides.slice(0, index).reduce((s, x) => s + x.durationSec, 0) +
      Math.min(elapsed, slide?.durationSec ?? 0),
    [video.slides, index, elapsed, slide],
  );

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (!playing || !slide) return;
    timer.current = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= slide.durationSec) {
          if (index < video.slides.length - 1) {
            setIndex((i) => i + 1);
            return 0;
          }
          setPlaying(false);
          return slide.durationSec;
        }
        return e + 1;
      });
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, index, slide, video.slides.length]);

  if (!slide) return null;

  const atEnd = index === video.slides.length - 1 && elapsed >= slide.durationSec;

  return (
    <View style={styles.wrap}>
      <View style={styles.stage}>
        <Text style={styles.kicker}>
          Slide {index + 1}/{video.slides.length}
        </Text>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.narration}>{slide.narration}</Text>
        {slide.bullets?.map((b) => (
          <Text key={b} style={styles.bullet}>
            • {b}
          </Text>
        ))}
      </View>

      <View style={styles.timelineTrack}>
        <View
          style={[
            styles.timelineFill,
            { width: `${Math.min(1, completedSec / totalSec) * 100}%` },
          ]}
        />
      </View>
      <Text style={styles.time}>
        {completedSec}s / {totalSec}s
      </Text>

      <View style={styles.controls}>
        <Pressable
          style={styles.ctrl}
          onPress={() => {
            setPlaying(false);
            setIndex((i) => Math.max(0, i - 1));
            setElapsed(0);
          }}
        >
          <Text style={styles.ctrlText}>Prev</Text>
        </Pressable>
        <Pressable
          style={[styles.ctrl, styles.ctrlPrimary]}
          onPress={() => setPlaying((p) => !p)}
        >
          <Text style={styles.ctrlText}>{playing ? 'Pause' : 'Play'}</Text>
        </Pressable>
        <Pressable
          style={styles.ctrl}
          onPress={() => {
            if (index < video.slides.length - 1) {
              setIndex((i) => i + 1);
              setElapsed(0);
            } else {
              setElapsed(slide.durationSec);
              setPlaying(false);
            }
          }}
        >
          <Text style={styles.ctrlText}>Next</Text>
        </Pressable>
      </View>

      {(atEnd || !playing) && (
        <View style={{ marginTop: 12 }}>
          <Text style={styles.cta}>{video.cta}</Text>
          <PrimaryButton title="Mark complete" onPress={onComplete} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  stage: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 220,
  },
  kicker: { color: colors.accent, fontWeight: '700', marginBottom: 8 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', marginBottom: 10 },
  narration: { color: colors.text, fontSize: 16, lineHeight: 24, marginBottom: 12 },
  bullet: { color: colors.textMuted, fontSize: 15, marginBottom: 4 },
  timelineTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.surfaceAlt,
    overflow: 'hidden',
  },
  timelineFill: { height: '100%', backgroundColor: colors.success },
  time: { color: colors.textMuted, fontSize: 12 },
  controls: { flexDirection: 'row', gap: 8 },
  ctrl: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  ctrlPrimary: { backgroundColor: colors.accentSoft, borderColor: colors.accent },
  ctrlText: { color: colors.text, fontWeight: '700' },
  cta: { color: colors.textMuted, marginBottom: 8, fontSize: 14 },
});
