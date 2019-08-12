import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './app/index/index.component';
import { NavigationComponent } from './app/navigation/navigation.component';
import { UsersComponent } from './app/users/users.component';
import { AboutComponent } from './app/about/about.component';
import { UserAddComponent } from './app/user-add/user-add.component';
import { UserEditComponent } from './app/user-edit/user-edit.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';


const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/:id",
    component: UserEditComponent
  },
  {
    path: "addnewuser",
    component: UserAddComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IndexComponent,
    UsersComponent,
    UserEditComponent,
    UserAddComponent,
    AboutComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }