import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MemberApiService } from 'src/app/shared/member-api.service';
import { Detachment } from 'src/app/shared/detachment';

@Component({
    selector: 'app-detachment',
    templateUrl: './detachment.page.html',
    styleUrls: ['./detachment.page.scss'],
})
export class DetachmentPage implements OnInit {

    detachment$ = new BehaviorSubject<Detachment>(null);

    constructor(
        private activatedRoute: ActivatedRoute,
        private memberApiService: MemberApiService
    ) { }

    ngOnInit() {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        this.getDetachment(id);
    }

    private async getDetachment(id: number) {
        const detachment = await this.memberApiService.getDetachment(id).toPromise();
        console.log(detachment);
        this.detachment$.next(detachment);
    }

}
