import { Box } from './Box';
import { Title } from './Title'; 
import { Statistics} from './Statistics'; 
import {StyledButton} from './Button.styled';
import { Notification } from './Notification';
import React from "react";


class Reviews extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1
      }
    }
  )}

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0)
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good / this.countTotalFeedback() * 100
  }
  
  
    render() {
      const total = this.countTotalFeedback();
      const positiv = Math.round(this.countPositiveFeedbackPercentage());
        return (
          <Box height='100%' pl={4} color='text'>
              <Title children='Please leave feedback'/>
              <Box  display="flex" justifyContent='start' alignItems='center' gridGap={2}>
              {Object.keys(this.state).map(key => (
                  <StyledButton
                    key={key}
                    onClick={() => this.handleClick(key)}>{key}
                  </StyledButton>
                ))}
                
              </Box>
              
              <Title children='Statistics:' />

              {Object.values(this.state).some(value => (value > 0 )) ? (
                <Statistics 
                  state={this.state}
                  total={total}
                  positiv={positiv}/>
              ) : (
                <Notification message="There is no feedback" />)}              
          </Box>
        );
    }  
} 

export default Reviews;