import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  signedIn: boolean;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.signedIn = authState === AuthState.SignedIn;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
