import { Component, state } from '@angular/core';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { RestService} from '../services/rest.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  templateUrl: 'user.component.html',
  providers: [RestService]
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private restService: RestService) {
    this.name = 'Rahul';
    this.email = 'rahul@gmail.com';
    this.address = {
      street: '626C, Sector 45C',
      city: 'Chandigharh',
      state: 'Punjab'
    };
    this.hobbies = ['Music', 'Playing', 'Dancing'];
    this.showHobbies = false;
    this.restService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toogleHobbies() {
    if (!this.showHobbies) {
      this.showHobbies = true;
    } else {
      this.showHobbies = false;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: Number;
  title: string;
  body: string;
}
