import { Box} from './Box'
import { Label, Result } from 'components/Reviews/Statistics.styled';
import PropTypes from 'prop-types';

export const Feedback = ({typeFeedback, onRating}) => {
    return <Box
                height='25px' 
                display="flex" 
                justifyContent='start' 
                alignItems='center' 
                gridGap={2}
            >
                <Label>{typeFeedback}:</Label>
                <Result>{onRating}</Result>
            </Box>
}

Feedback.propTypes = {
    typeFeedback: PropTypes.string,
    onRating: PropTypes.node,
}