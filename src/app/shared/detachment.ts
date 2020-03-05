import { Officer } from './officer';
import { Member } from './member';

/** Detachment Interface */
export interface Detachment {
    detachmentId: number;
    name: string;
    url: string;
    officers: Officer[];
    members?: Member[];
    /** logo calculated, not sent */
    logo?: string;
}
