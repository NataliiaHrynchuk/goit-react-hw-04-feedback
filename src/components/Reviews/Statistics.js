import { Feedback} from './FeedBack';
import { Box } from './Box';
import PropTypes from 'prop-types';

export const Statistics = ({options, total, positiv}) => {
    return <Box display="block">
                {Object.keys(options).map(option=> (
                    <Feedback 
                        key={option}
                        typeFeedback={option}
                        onRating={options[option]}/>
                        ))}
                    <Feedback
                        typeFeedback='Total'
                        onRating={total}/>
                    <Feedback
                        typeFeedback='Positiv feedback'
                        onRating={`${positiv}%`}/>        
            </Box>
}

Statistics.propTypes = {
    options: PropTypes.object,
    total: PropTypes.number,
    positiv: PropTypes.number,
}

