import { StyledWrap } from 'components/Reviews/Wrap.styled';
import { Label, Result } from 'components/Reviews/Statistics.styled';
export const Wrap = ({typeFeedback, rating}) => {
    return <StyledWrap>
        <Label>{typeFeedback}:</Label>
        <Result>{rating}</Result>
    </StyledWrap>
}