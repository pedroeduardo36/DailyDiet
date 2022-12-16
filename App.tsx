import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import { ActivityIndicator, StatusBar } from "react-native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Routes /> : <ActivityIndicator />}
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
}
