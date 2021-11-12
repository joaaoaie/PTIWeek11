import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhs',
  templateUrl: './mhs.component.html',
  styleUrls: ['./mhs.component.css']
})
export class MhsComponent implements OnInit {
  nama: string[];

  constructor() {
    this.nama = ['Mika', 'Rafa', 'Yosh', 'Gaby'];
  }

  ngOnInit(): void {
  }

}
