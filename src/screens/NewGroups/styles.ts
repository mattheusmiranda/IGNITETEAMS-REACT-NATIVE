import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Fontisto';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const IconPersons = styled(Icon).attrs(({ theme }) => ({
    name: 'persons',
    size: 56,
    color: theme.COLORS.GREEN_700
}))`
    align-self: center;
`;