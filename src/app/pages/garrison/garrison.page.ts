import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MemberApiService } from 'src/app/shared/member-api.service';
import { Unit } from 'src/app/shared/unit';

@Component({
  selector: 'app-garrison',
  templateUrl: './garrison.page.html',
  styleUrls: ['./garrison.page.scss'],
})
export class GarrisonPage implements OnInit {

    unit$ = new BehaviorSubject<Unit>(null);

    constructor(
        private activatedRoute: ActivatedRoute,
        private memberApiService: MemberApiService
    ) { }

    ngOnInit() {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        this.getUnit(id);
    }

    private async getUnit(id: number) {
        const unit = await this.memberApiService.getUnitMembers(id).toPromise();
        unit.id = id; // not returned :P
        console.log(unit);
        this.unit$.next(unit);
    }

}
