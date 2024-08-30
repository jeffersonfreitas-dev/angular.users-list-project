import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns'


const filterList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = []
  filteredList = filterUsersListByName(filterOptions.name, usersList)
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList)
  filteredList = filterUsersListByByDate(filterOptions.startDate, filterOptions.endDate, filteredList)
  return filteredList;
}

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  if(name === undefined) return usersList
  return usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  if(status === undefined) return usersList
  return usersList.filter((user) => user.ativo === status)
}

const filterUsersListByByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] =>  {
  if(startDate === undefined || endDate === undefined) return usersList
  return usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
    start: startDate, end: endDate
  }))
}

export {filterList}
