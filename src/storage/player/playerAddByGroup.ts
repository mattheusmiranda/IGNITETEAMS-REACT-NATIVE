import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { PlayerGetByGroups } from './playersGetByGroups';
import { PLAYER_COLLECTION } from '@storage/storegeConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayer = await PlayerGetByGroups(group);

        const playerAlreadyExists = storedPlayer.filter(player => player.name === newPlayer.name);

        if (playerAlreadyExists.length > 0) {
            throw new AppError('Essa pessoa já esta adicionada em outro time.');
        }

        const storage = JSON.stringify([...storedPlayer, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch (error) {
        throw (error);
    }
}