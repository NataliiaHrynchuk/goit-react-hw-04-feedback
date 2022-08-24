import { Container } from 'components/Reviews/Container.styled';
import { Button } from 'components/Reviews/Button.styled';
import { Title } from 'components/Reviews/Title.styled';
import { Label, Result } from 'components/Reviews/Statistics.styled';
import { Wrap } from 'components/Reviews/Wrap.styled';
import React from "react";

class Reviews extends React.Component {
  static defaultProps = {
    initialValue: 0,
  }
  state = {
    value: this.props.initialValue,
  };
  incrementGood = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  incrementNeutral = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  }

  incrementBad = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  }
    render() {
        return (
            <Container>
              <Title>Please leave feedback</Title>
              <Wrap>
                <Button type="button" onClick={this.incrementGood}>Good</Button>
                <Button type="button" onClick={this.incrementNeutral}>Neutral</Button>
                <Button type="button" onClick={this.incrementBad}>Bad</Button>
              </Wrap>
              <Title>Statistics:</Title>
              <Wrap>
                <Label>Good:</Label>
                <Result>{this.state.value}</Result>
              </Wrap>
              <Wrap>
                <Label>Neutral:</Label>
                <Result>{this.state.value}</Result>
              </Wrap>
        
              <Wrap>
                <Label>Bad:</Label>
                <Result>{this.state.value}</Result>
              </Wrap>
              <Wrap>
                <Label>Total:</Label>
                <Result>{this.state.value}</Result>
              </Wrap>
              <Wrap>
                <Label>Positiv feedback:</Label>
                <Result>{this.state.value}</Result>
              </Wrap>
            </Container>
          );
    }
}

export default Reviews;