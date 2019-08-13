import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Table';
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
