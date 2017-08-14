import {Component} from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'tables',
  template: `<router-outlet></router-outlet>`
})
export class Tables {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
        .subscribe(users => {
            this.users = users;
        });
  }
}
