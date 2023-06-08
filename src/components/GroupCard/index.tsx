import { TouchableOpacityProps } from "react-native";
import { Container, Title, IconUsers } from "./styles"

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <IconUsers />
            <Title>
                {title}
            </Title>
        </Container>
    );
}