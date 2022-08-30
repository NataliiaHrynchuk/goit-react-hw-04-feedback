import { Feedback} from './FeedBack';
import { Box } from './Box';
import PropTypes from 'prop-types';

export const Statistics = ({state, total, positiv}) => {
    return <Box display="block">
                {Object.keys(state).map(key => (
                    <Feedback 
                        key={key}
                        typeFeedback={key}
                        onRating={state[key]}/>
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
    state: PropTypes.object,
    total: PropTypes.number,
    positiv: PropTypes.number,
}

