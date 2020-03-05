import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MemberApiService } from 'src/app/shared/member-api.service';
import { Detachment } from 'src/app/shared/detachment';

@Component({
    selector: 'app-detachments',
    templateUrl: './detachments.page.html',
    styleUrls: ['./detachments.page.scss'],
})
export class DetachmentsPage implements OnInit {

    detachments$ = new BehaviorSubject<Detachment[]>(null);

    constructor(
        private memberApiService: MemberApiService
    ) { }

    ngOnInit() {
        this.getDetachments();
    }

    private async getDetachments() {
        const detachments = await this.memberApiService.getDetachments().toPromise();
        console.log(detachments);
        this.detachments$.next(detachments);
    }

}
