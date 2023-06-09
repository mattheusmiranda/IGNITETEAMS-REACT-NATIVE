import { Header } from '@components/Header';
import { Container, Content, IconPersons } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroups() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <IconPersons />

                <Highlight
                    title='Nova turma'
                    subTitle='Crie uma turma para adiconar pessoas'
                />

                <Input
                    placeholder='Nome da turma'
                />

                <Button
                    title='Criar'
                    style={{ marginTop: 20 }}
                />

            </Content>

        </Container>
    );
}