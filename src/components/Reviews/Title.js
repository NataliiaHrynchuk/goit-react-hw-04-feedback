import { StyledTitle } from "./Title.styled";
import PropTypes from 'prop-types';

export const Title = ({children}) => {
    return <StyledTitle>{children}</StyledTitle>
};

Title.propTypes = {
    children: PropTypes.node,
}