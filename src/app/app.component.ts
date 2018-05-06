import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/resetpasswordbytoken">ResetPassword</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
