import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent {
  data: any[];
  item: any;
  index: number;

  constructor(private sessionService: SessionService, private router: Router) {
    this.data = this.sessionService.read();
    this.item = {};
    this.index = -1;
  }

  // create new contact
  create(): void {
    this.sessionService.create(this.item);
    this.data = this.sessionService.read();
    this.item = {};
    this.index = -1;
  }

  read(item: any): void {}

  // update a single contact
  update(): void {
    this.sessionService.update(this.index, this.item);
    this.data = this.sessionService.read();
    this.item = {};
    this.index = -1;
  }

  // delete a single contact
  delete(index: number): void {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      this.sessionService.delete(index);
      this.data = this.sessionService.read();
      this.item = {};
      this.index = -1;
    }
  }

  // Function to select a contact
  select(index: number): void {
    this.item = Object.assign({}, this.data[index]);
    this.index = index;
  }
}
