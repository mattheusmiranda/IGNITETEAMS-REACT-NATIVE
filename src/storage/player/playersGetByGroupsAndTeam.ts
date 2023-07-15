import { PlayerGetByGroups } from './playersGetByGroups';

export async function playersGetByGroupsAndTeam(group: string, team: string) {
    try {
        const storage = await PlayerGetByGroups(group);

        const players = storage.filter(player => player.team === team);
    } catch (error) {
        throw error;
    }
}