import { Container } from "./App.styled";
import { Button } from "./Button.styled";
import { Title } from "./Title.styled";
import { Label, Result } from "./Statistics.styled";
import { Wrap } from "./Wrap.styled";

export const App = () => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <Wrap>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </Wrap>
      <Title>Statistics:</Title>
      <Wrap>
        <Label>Good:</Label>
        <Result>5</Result>
      </Wrap>
      <Wrap>
        <Label>Neutral:</Label>
        <Result></Result>
      </Wrap>

      <Wrap>
        <Label>Bad:</Label>
        <Result></Result>
      </Wrap>
      <Wrap>
        <Label>Total:</Label>
        <Result></Result>
      </Wrap>
      <Wrap>
        <Label>Positiv feedback:</Label>
        <Result></Result>
      </Wrap>
    </Container>
  );
};
