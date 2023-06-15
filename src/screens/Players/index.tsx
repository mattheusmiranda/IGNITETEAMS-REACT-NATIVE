import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NuberOfPlayers } from './styles';
import { Filter } from '@components/Filter';
import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { useState } from 'react';

export function Players() {

    const [team, setTeam] = useState('Time A');
    const [player, setPlayer] = useState([team]);

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
                    horizontal
                />

                <NuberOfPlayers>
                    {player.length}
                </NuberOfPlayers>
            </HeaderList>

        </Container>
    );
}