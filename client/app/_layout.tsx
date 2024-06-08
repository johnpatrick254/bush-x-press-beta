import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import {GestureHandlerRootView} from "react-native-gesture-handler"
import { useColorScheme } from '@/components/useColorScheme';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import your global CSS file
import "../global.css"
import { AuthProvider } from '@/providers/authProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

const firebaseConfig = {
  apiKey: "AIzaSyCoeb0z0BbCAfc0kMGD1lqhbl6P3TA6rt8",
  authDomain: "bush-xpress.firebaseapp.com",
  projectId: "bush-xpress",
  storageBucket: "bush-xpress.appspot.com",
  messagingSenderId: "393304015403",
  appId: "1:393304015403:web:f4a2c8c3a26ca75526a06e",
  measurementId: "G-G6V1RPE95T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
      <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(auths)" options={{headerShown: false}} />
      </Stack>
      </GestureHandlerRootView>
      </AuthProvider>
    </ThemeProvider>
  );
}
