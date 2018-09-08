import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})

export class PassengerComponent implements OnInit {
  name: string = 'Markx'
  constructor() { }

  ngOnInit() {
  }

}
