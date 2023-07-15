import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from '@components/ButtonIcon';

import { Container, Form, HeaderList, NuberOfPlayers } from './styles';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { PlayerGetByGroups } from '@storage/player/playersGetByGroups';
import { playersGetByGroupsAndTeam } from '@storage/player/playersGetByGroupsAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';

type RouteParams = {
    group: string;
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
            const players = await PlayerGetByGroups(group);

            console.log(players);
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message);
            } else {
                console.log(error);
                Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupsAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert("Pessoas", "Não foi possível carregar as pessoas.")
        }
    }

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subTitle='Adicione a galera e separe os times'
            />

            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder='Nome da pessoa'
                    autoCorrect={false} // deixa o usuario colocar apelidos 
                />

                <ButtonIcon
                    icon={'add'}
                    type='PRIMARY'
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>

                <FlatList
                    data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F', 'Time G']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}

                    showsHorizontalScrollIndicator={false}// desabilita barra de rolagem 
                    horizontal
                />

                <NuberOfPlayers>
                    {players.length}
                </NuberOfPlayers>

            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}

                showsVerticalScrollIndicator={false}// desabilita barra de rolagem

                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}

                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas neste time."
                    />
                )}
            />

            <Button
                title='Remover Turma'
                type='SECONDARY'
            />


        </Container>
    );
}