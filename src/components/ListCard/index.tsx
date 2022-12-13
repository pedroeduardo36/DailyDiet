import { Container, Ball, Hour, Meal, HourView } from "./styles";

export function ListCard() {
  return (
    <Container>
      <HourView>
        <Hour>20:00</Hour>
      </HourView>
      <Meal>Havanna Thunder</Meal>
      <Ball />
    </Container>
  );
}
