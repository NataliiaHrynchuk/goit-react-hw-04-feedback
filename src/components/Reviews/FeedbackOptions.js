import { Box } from './Box';
import {StyledButton} from './Button.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onHandleClick}) => {
    return (
        <Box  display="flex" justifyContent='start' alignItems='center' gridGap={2}>
            {options.map(option => {
                return (
                    <StyledButton
                        type="button"
                        key={option}
                        onClick={() => onHandleClick(option)}>
                        {option}
                    </StyledButton>
                );
                
            })}
        </Box>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired,
    onHandleClick: PropTypes.func.isRequired,
};