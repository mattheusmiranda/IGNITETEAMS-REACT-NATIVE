import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    async function fetchGroups() {
        try {
            const data = await groupsGetAll();
            setGroups(data);
        } catch (error) {
            console.log(error);
        }
    }

    function hendleOpenGroup(group: string) {
        navigation.navigate("players", { group });
    }

    useFocusEffect(useCallback(() => {
        console.log("useCallback executou")
        fetchGroups();
    }, []));

    return (
        <Container>

            <Header />

            <Highlight
                title="Turmas"
                subTitle="Jogue com a sua turma"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => hendleOpenGroup(item)}
                    />
                )}

                contentContainerStyle={groups.length === 0 && { flex: 0.7 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Cadastre a primeira turma"
                    />
                )}

                showsVerticalScrollIndicator={false}

            />

            <Button
                title='Criar nova turma'
                onPress={handleNewGroup}
            />

        </Container>
    );
}

