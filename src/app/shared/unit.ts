import { Officer, Member } from '../services/member-api.service';

/**
 * Unit (Garrison/Outpost) Interface
 * 
 * Returns as array of 'garrisons' from garrisons call.
 * Returns as 'unit' from garrisons/# call.
 * Includes members list in garrisons/#/members call.
 */
export interface Unit {
    id: number,
    name: string,
    unitType: 'Garrison' | 'Outpost',
    logo: string,
    url: string,
    officers: Officer[],
    members?: Member[],
}
