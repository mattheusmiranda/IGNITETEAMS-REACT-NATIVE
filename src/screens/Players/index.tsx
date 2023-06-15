import { useState } from 'react';

import { FlatList } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';
import { PlayerCard } from '@components/PlayerCard';

import { Container, Form, HeaderList, NuberOfPlayers } from './styles';
export function Players() {


    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title='Nome da turma'
                subTitle='Adicione a galera e separe os times'
            />

            <Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false} // deixa o usuario colocar apelidos 
                />

                <ButtonIcon
                    icon={'add'}
                    type='PRIMARY'
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