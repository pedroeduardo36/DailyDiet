import { Highlight, InfoCard, RefInDietCard } from "@components/index";
import { Text, View } from "react-native";
import {
  PercentageContainer,
  Container,
  StatsContainer,
  InOrOutContainer,
} from "./styles";
import { CaretLeft } from "phosphor-react-native";

export function Stats() {
  return (
    <>
      <PercentageContainer>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <CaretLeft color="#000" size={24} />

          <Highlight title="90,28%" subtitle="de refeições dentro da dieta" />
        </View>
      </PercentageContainer>

      <StatsContainer>
        <Text style={{fontWeight: 'bold', margin: 12}}>Estatísticas gerais</Text>
        <InfoCard />
        <InfoCard />
        <InOrOutContainer>
          <RefInDietCard />
          <RefInDietCard />
        </InOrOutContainer>
      </StatsContainer>
    </>
  );
}
