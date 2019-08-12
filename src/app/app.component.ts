// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { UserService } from './service/user.service';
// import { User } from './model/user';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'Data Table';
//   userList: User[];
//   userSubscription: Subscription;

//   constructor(
//     private userService: UserService
//   ) {

//   }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

//   ngOnInit() {
//     this.userSubscription = this.userService.getAll().subscribe(
//       users => this.userList = users
//     );
//   }

//   ngOnDestroy() {
//     this.userSubscription.unsubscribe();
//   }
// }
