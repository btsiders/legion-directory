import { Costume } from './costume';

/** Member Interface */
export interface Member {
    legionId: number;
    formattedLegionId: string;
    fullName: string;

    // link or profileUrl
    link?: string;
    profileUrl?: string;

    // thumbnail or primaryThumbnail
    thumbnail?: string;
    primaryThumbnail?: string;

    // other optional fields
    firstName?: string;
    lastName?: string;
    forumName?: string;
    joinDate?: Date;
    memberApproved?: string;
    memberStatus?: string;
    memberStanding?: string;
    garrisonId?: number;
    garrisonName?: string;
    squadId?: number;
    /* Yup. This one doesn't end in Name */
    squad?: string;

    costumes?: Costume[];
}
