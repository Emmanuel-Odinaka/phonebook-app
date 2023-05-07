import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-session',
  templateUrl: './read-session.component.html',
  styleUrls: ['./read-session.component.scss'],
})
export class ReadSessionComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  birthday: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((val) => {
      this.name = val['name'];
      this.email = val['email'];
      this.phone = val['phone'];
      this.address = val['address'];
      this.birthday = val['birthday'];
    });
  }

  goBack() {
    this.location.back();
  }
}
