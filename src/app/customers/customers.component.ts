import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customerId: number | string = 'not set';

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((p: any) => {
      if(p.id) {
        this.customerId = p.id
      }
    });
  }

}
