import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  
  transform(status: boolean): string {
    if(status === null || status === undefined ) return 'Status indisponível ou inválido'
    return status ? 'Ativo' : 'Inativo'
  }
  
}