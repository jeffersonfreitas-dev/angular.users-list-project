import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({required: true}) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>()

  onUserSelected(user: IUser) {
    console.log(user)
    this.userSelectedEmitt.emit(user)
  }
}
