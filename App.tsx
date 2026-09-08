import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ProgressProvider } from './src/shared/ProgressContext';
import { HomeScreen } from './src/screens/HomeScreen';
import { ModuleScreen } from './src/screens/ModuleScreen';
import { LessonScreen } from './src/screens/LessonScreen';
import type { RootStackParamList } from './src/navigation/types';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bg,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    primary: colors.accent,
  },
};

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Module"
            component={ModuleScreen}
            options={{ title: 'Module' }}
          />
          <Stack.Screen
            name="Lesson"
            component={LessonScreen}
            options={{ title: 'Lesson' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProgressProvider>
  );
}
