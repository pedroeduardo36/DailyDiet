import { Highlight } from "../Highlight";
import { Container, RowContainer } from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

export function PercentageCard() {
  return (

      <Container>
        <ArrowUpRight color='#639339' style={{alignSelf: 'flex-end' }}/>
        <Highlight title="90,45%" subtitle="De refeições dentro da dieta" />
      </Container>
  );
}
