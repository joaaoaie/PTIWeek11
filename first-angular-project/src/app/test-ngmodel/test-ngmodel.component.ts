import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngmodel',
  templateUrl: './test-ngmodel.component.html',
  styleUrls: ['./test-ngmodel.component.css']
})
export class TestNgmodelComponent implements OnInit {
  product: string;

  constructor() {
    this.product = 'first try';
  }

  ngOnInit() {
  }

}
