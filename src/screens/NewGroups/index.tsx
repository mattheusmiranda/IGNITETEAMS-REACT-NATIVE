import { Header } from '@components/Header';
import { Container, Content, IconPersons } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroups() {

    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    async function hendleNew() {

        if (group.trim().length === 0) {
            Alert.alert("Novo Grupo", "Informe o nome da turma.");
            return;
        } else {
            try {
                await groupCreate(group);
                navigation.navigate('players', { group });
            } catch (error) {
                if (error instanceof AppError) {
                    Alert.alert("Novo Grupo", error.message);
                } else {
                    Alert.alert("Novo Grupo", "Não foi possivel criar um novo grupo.");
                    console.log(error);
                }
            }
        }

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