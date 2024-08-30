import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterList } from './utils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  usersList: IUser[] = []
  usersListFiltered: IUser[] = []
  userSelected: IUser = {} as IUser
  showUserDetails: boolean = false

  ngOnInit(){
    setTimeout(() => {
      this.usersList = UserList
      this.usersListFiltered = this.usersList
    }, 3000)
  }

  onUserSelected (userSelected: IUser) {
    this.userSelected = userSelected
    this.showUserDetails = true
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions)
    this.usersListFiltered = filterList(filterOptions, this.usersList)
  }
}
