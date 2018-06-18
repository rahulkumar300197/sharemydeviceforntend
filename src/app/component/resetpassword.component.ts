import { OnInit, Component, state } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { RestService} from '../services/rest.service';

@Component({
  moduleId: module.id,
  selector: 'app-resetpasswordbytoken-component',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.style.css'],
  providers: [RestService]
})
export class ResetPasswordComponent  implements OnInit {
  password: string;
  confirmpassword: string;
  token: string;

  constructor(
    private restService: RestService ,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.token = this.activatedRoute.queryParams['_value'].token;
    console.log(this.token);
  }

  validateandsetpassword () {
    console.log('On Click');
    if (this.password.match(this.confirmpassword)) {
      console.log('Matched')
      ;
      this.restService.resetpasswordbytoken(this.token, this.password)
      .subscribe(
        data => alert(JSON.stringify(data)),
        error => alert(error)
      );
    } else {
      console.log('Notmatched');
      // err message
    }
  }
}
