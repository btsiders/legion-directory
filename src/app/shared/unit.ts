import { Officer } from './officer';
import { Member } from './member';

/**
 * Unit (Garrison/Outpost) Interface
 *
 * Returns as array of 'garrisons' from garrisons call.
 * Returns as 'unit' from garrisons/# call.
 * Includes members list in garrisons/#/members call.
 */
export interface Unit {
    id?: number;
    name: string;
    unitType: 'Garrison' | 'Outpost';
    unitSize?: number;
    logo: string;
    url: string;
    officers: Officer[];
    members?: Member[];
}
