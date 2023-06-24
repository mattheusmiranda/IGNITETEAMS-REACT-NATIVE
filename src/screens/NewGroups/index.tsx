import { Header } from '@components/Header';
import { Container, Content, IconPersons } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function NewGroups() {

    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    function hendleNew() {
        navigation.navigate('players', { group });
    }

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
                    onChangeText={setGroup}
                />

                <Button
                    title='Criar'
                    style={{ marginTop: 20 }}
                    onPress={hendleNew}
                />

            </Content>

        </Container>
    );
}