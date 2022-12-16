import { Highlight } from "../Highlight";
import { Container, PercentageCardStyleProps, RowContainer } from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
  type?: PercentageCardStyleProps;
};

export function PercentageCard({ type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <ArrowUpRight color="#639339" style={{ alignSelf: "flex-end" }} />
      <Highlight title="90,45%" subtitle="De refeições dentro da dieta" />
    </Container>
  );
}
