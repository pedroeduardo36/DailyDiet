import { Container } from "./styles";
import { Button, PercentageCard, Header } from "@components/index";
import { Text } from "react-native";


export function Home() {
  return (
    <Container>
      <Header />
      <PercentageCard />
      <Text
        style={{ marginTop: 48, marginBottom: 12, alignSelf: "flex-start" }}
      >
        Refeições
      </Text>
      <Button title="+ Nova refeição" />
    </Container>
  );
}
