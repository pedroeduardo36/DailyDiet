import { Home } from "@screens/Home";
import theme from '@theme/index'
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
}
