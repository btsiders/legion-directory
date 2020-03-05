import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, publishReplay, refCount } from 'rxjs/operators';
import { Unit } from './unit';
import { Detachment } from './detachment';
import { Member } from './member';

export const API_URL = 'https://www.501st.com/memberAPI/v3';
export const LOGO_THUMBNAIL_SIZE = 125;

@Injectable({
    providedIn: 'root'
})
export class MemberApiService {

    private detachments: Observable<Detachment[]>;
    private units: Observable<Unit[]>;

    constructor(public http: HttpClient) { }

    /** Get all detachments */
    public getDetachments(): Observable<Detachment[]> {
        const url = `${API_URL}/detachments`;

        if (!this.detachments) {
            this.detachments = this.http
                .get(url)
                .pipe(map((res: { detachments: [] }) => {
                    const detachments = res.detachments;
                    detachments.map((detachment: Detachment) => {

                        const dashNameArray = detachment.name
                            .toLowerCase()
                            .split(/\s/);
                        let dashName = dashNameArray.map(d => d[0].toUpperCase() + d.substr(1)).join('-');

                        // Special cases
                        if (dashName === 'Armored-Cavalry-Detachment') {
                            dashName = 'Armored-Calvary-Detachment'; // derp typo
                        } else if (dashName === 'Spec-Ops-Detachment') {
                            dashName = 'Special-Ops-Detachment'; // make it longer!
                        } else if (dashName === 'The-Flagship-Eclipse-Detachment') {
                            dashName = 'Flagship-Eclipse'; // make it shorter!
                        } else if (dashName === 'Underworld-Detachment') {
                            dashName = 'Underworld'; // shorter!
                        } else if (dashName === 'Mos-Eisley-Police-Department') {
                            dashName = 'MEPD'; // shorter!
                        } else if (dashName === 'First-Imperial-Stormtrooper-Detachment') {
                            dashName = 'FISD'; // shorter!
                        }

                        detachment.logo = `https://www.501st.com/images/logos/${LOGO_THUMBNAIL_SIZE}px/${dashName}.png`;
                        detachment.url = `http://${detachment.url}`;
                    });
                    return detachments;
                }), publishReplay(1), refCount())
                .pipe(catchError(this.handleError));
        }

        return this.detachments;
    }

    /** Get detachment */
    public getDetachment(id: number): Observable<Detachment> {
        const url = `${API_URL}/detachments/${id}`;
        return this.http
            .get(url)
            .pipe(
                map((res: { detachment: Detachment }) => res.detachment),
                publishReplay(1),
                refCount())
            .pipe(catchError(this.handleError));
    }

    /** Get detachment with members */
    public getDetachmentMembers(id: number): Observable<Detachment> {
        const url = `${API_URL}/detachments/${id}/members`;
        return this.http
            .get(url)
            .pipe(map((res: { detachment: Detachment, unit: any }) => {
                const detachment: Detachment = res.detachment;
                detachment.members = res.unit.members;
                return detachment;
            }), publishReplay(1), refCount())
            .pipe(catchError(this.handleError));
    }

    /** Get all units */
    public getUnits(): Observable<Unit[]> {
        const url = `${API_URL}/garrisons`;

        if (!this.units) {
            this.units = this.http
                .get(url)
                .pipe(map((res: { garrisons: [] }) => {
                    const units = res.garrisons;
                    units.map((unit: Unit) => {
                        // fix up img url
                        // ? Maybe this can be done in 1 regex using a result?
                        unit.logo = unit.logo
                            .replace(`<img src="`, '')
                            .replace(`" class="png" width="125px">`, '');
                    });
                    return units;
                }), publishReplay(1), refCount())
                .pipe(catchError(this.handleError));
        }

        return this.units;
    }

    public clearUnitsCache() {
        this.detachments = null;
    }

    /**
     * Get basic unit info and officers
     * @param id Unit id
     */
    public getUnit(id: number): Observable<Unit> {
        const url = `${API_URL}/garrisons/${id}`;
        return this.http.get<Unit>(url);
    }

    /**
     * Get basic unit info, officers, and members
     * @param id Unit id
     */
    public getUnitMembers(id: number): Observable<Unit> {
        const url = `${API_URL}/garrisons/${id}/members`;
        return this.http.get(url)
            .pipe(map((res: { unit: Unit }) => res.unit));
    }

    /** Get member */
    public getMember(id: number): Observable<Member> {
        const url = `${API_URL}/legionId/${id}/costumes`;
        return this.http
            .get<Member>(url)
            // .pipe(
            //     map((res: { member: Member }) => res.member),
            //     publishReplay(1),
            //     refCount())
            .pipe(catchError(this.handleError));
    }

    /**
     * Verify member by email
     * @param email address used on 501st.com site
     */
    public verifyMemberEmail(email: string): Observable<any> {
        const url = `${API_URL}/email/${email}`;
        return this.http.get(url);
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
