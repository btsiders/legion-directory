import { Component, OnInit } from '@angular/core';
import { MemberApiService } from 'src/app/shared/member-api.service';
import { Unit } from 'src/app/shared/unit';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-garrisons',
    templateUrl: './garrisons.page.html',
    styleUrls: ['./garrisons.page.scss'],
})
export class GarrisonsPage implements OnInit {

    units$ = new BehaviorSubject<Unit[]>(null);

    constructor(
        private memberApiService: MemberApiService
    ) { }

    ngOnInit() {
        this.getUnits();
    }

    public noClick(event: Event) {
        event.stopPropagation();
    }

    private async getUnits() {
        const units = await this.memberApiService.getUnits().toPromise();
        this.units$.next(units);
    }

}
