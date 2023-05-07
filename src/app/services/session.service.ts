import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  data: any[];

  constructor() {
    this.data = JSON.parse(sessionStorage.getItem('data') as string ) || [];
  }

  create(item: any): void {
    this.data.push(item);
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }

  read(): any[] {
    return JSON.parse(sessionStorage.getItem('data') as string) || [];
  }

  update(index: number, item: any): void {
    this.data[index] = item;
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }

  delete(index: number): void {
    this.data.splice(index, 1);
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }


}
