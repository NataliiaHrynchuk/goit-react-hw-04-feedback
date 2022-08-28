import { Box } from './Box';
// import { Container } from 'components/Reviews/Container.styled';
import { Button } from './Button';
import { Title } from './Title'; 
import { Wrap } from './Wrap'; 
import { StyledWrap } from './Wrap.styled';
import React from "react";
// import PropTypes from 'prop-types';

class Reviews extends React.Component {
  static defaultProps = {
    initialValue: 0,
  }

  static propTypes = {
    
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
          <Box height='100%' pl={4} color='text'>
              <Title>Please leave feedback</Title>
              <StyledWrap>
                <Button onClick={this.incrementGood}>Good</Button>
                <Button onClick={this.incrementNeutral}>Neutral</Button>
                <Button onClick={this.incrementBad}>Bad</Button>
              </StyledWrap>
              <Title>Statistics:</Title>
              <Wrap 
                  typeFeedback='Good'
                  rating={this.state.value}/> 
              <Wrap 
                  typeFeedback='Neutral'
                  rating={this.state.value}/>                
              <Wrap
                  typeFeedback='Bad'
                  rating={this.state.value}/>        
              <Wrap
                  typeFeedback='Total'
                  rating={this.state.value}/>
              <Wrap
                  typeFeedback='Positiv feedback'
                  rating={this.state.value}/>            
            </Box>
          );
    }
}

export default Reviews;