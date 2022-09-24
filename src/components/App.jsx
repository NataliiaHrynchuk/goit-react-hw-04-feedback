import {useState} from 'react';
import { Box } from '../components/Reviews/Box';
import { Title } from '../components/Reviews/Title'; 
import {FeedbackOptions} from '../components/Reviews/FeedbackOptions';
import { Notification } from './Reviews/Notification';
import { Statistics } from './Reviews/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handlClick = type => {
    switch (type) {
      case 'good': 
        setGood(state => state + 1);
        break;
      case 'neutral': 
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error(`Unknown feedback type - ${type}`);  
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  };

  return(
    <Box height='100%' pl={4} color='text'>
      <Title children='Please leave feedback'/>
      <FeedbackOptions
        options={Object.keys({good, neutral, bad})}
        onHandleClick={handlClick}/>
      <Title children='Statistics:' />
      {Object.values({good, neutral, bad}).some(value => (value > 0)) ? (
        <Statistics
        options={Object({good, neutral, bad})}
        total={countTotalFeedback()}
        positiv={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" /> 
      )
      }  
    </Box>
  )

}