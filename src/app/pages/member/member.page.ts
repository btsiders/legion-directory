import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from 'src/app/shared/member';
import { ActivatedRoute } from '@angular/router';
import { MemberApiService } from 'src/app/shared/member-api.service';
import { Costume } from 'src/app/shared/costume';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

    member$ = new BehaviorSubject<Member>(null);

    constructor(
        private activatedRoute: ActivatedRoute,
        private memberApiService: MemberApiService,
    ) { }

    ngOnInit() {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
        this.getMember(id);
    }

    public showPlaceholder(event: CustomEvent) {
        console.log(event);
        const element = event.target as HTMLImageElement;
        // element.src = '/assets/missing-image.png';
        element.classList.add('ion-hide');
    }

    private async getMember(id: number) {
        const member = await this.memberApiService.getMember(id).toPromise();
        console.log(member);
        this.member$.next(member);
    }

}
