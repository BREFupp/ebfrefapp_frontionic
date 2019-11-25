import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patients-single',
  templateUrl: './patients-single.component.html',
  styleUrls: ['./patients-single.component.css']
})
export class PatientsSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // patients.single = [
    //   {
    //     title: 'Blog post',
    //     date: 'date',
    //     content: 'lorem',
    //     author: 'name'
    //   }
    // ];
  }

}
