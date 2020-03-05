import { Component, OnInit } from '@angular/core';
import { MemberApiService } from 'src/app/shared/member-api.service';

@Component({
    selector: 'app-verify',
    templateUrl: './verify.page.html',
    styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

    // tslint:disable-next-line: max-line-length
    public emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    public verifiedId: number = null;
    public verifiedEmail: string = null;
    public errorMessage: string = null;

    constructor(
        private memberApiService: MemberApiService
    ) { }

    ngOnInit() {

    }

    public async verify(event: Event) {

        this.errorMessage = null;
        this.verifiedId = null;

        try {

            const email = event.target[0].value;
            this.verifiedEmail = email;

            const response: {
                error: string,
                legionId: number
            } = await this.memberApiService
                .verifyMemberEmail(email).toPromise();

            console.log(response);

            if (response.legionId) {
                console.log('legionId', response.legionId);
                this.verifiedId = response.legionId;
            } else {
                console.log('error', response.error);
                this.errorMessage = response.error;
            }

        } catch (err) {
            console.log('error caught', err);
            this.errorMessage = err;
        }
    }

}
