import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, publishReplay, refCount } from 'rxjs/operators';
import { Unit } from '../shared/unit';

export const API_URL = 'https://www.501st.com/memberAPI/v3';

/**
 * Detachment Interface
 */
export interface Detachment {
	id: number,
	name: string,
	url: string,
	officers: Officer[]
}

/**
 * Member Interface
 */
export interface Member {
	legionId: number,
	/** DO NOT USE formattedLegionId */
	formattedLegionId: string,
	fullName: string,
	thumbnail: string,
	link: string
}

/**
 * Officer Interface
 */
export interface Officer {
	officeAcronym: string,
	office: string,
	legionId: number,
	/** DO NOT USE formattedLegionId */
	formattedLegionId: string,
	fullName: string,
	firstName: string,
	lastName: string,
	profileUrl: string,
	primaryThumbnail: string
}

@Injectable({
	providedIn: 'root'
})
export class MemberApiService {

	private units: Observable<Unit[]>;

	constructor(public http: HttpClient) { }

	/**
	 * Get all detachments
	 */
	public getDetachments(): Observable<Detachment[]> {
		const url = `${API_URL}/detachments`;
		return this.http
			.get<Detachment[]>(url)
			.pipe(catchError(this.handleError));
	}

	/**
	 * Get detachment
	 */
	public getDetachment(id: number): Observable<Detachment> {
		const url = `${API_URL}/detachments/${id}`;
		return this.http
			.get<Detachment>(url)
			.pipe(catchError(this.handleError));
	}

	/**
	 * Get all units
	 */
	public getUnits(): Observable<Unit[]> {
		const url = `${API_URL}/garrisons`;

		if (!this.units) {
			this.units = this.http
			.get(url)
			.pipe(map(res => {
				const units = res['garrisons'];
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
		this.units = null;
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
		return this.http.get<Unit>(url);
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
