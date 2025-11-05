import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-ng-style',
  templateUrl: './comp-ng-style.component.html',
  styleUrls: ['./comp-ng-style.component.scss']
})
export class CompNgStyleComponent implements OnInit {

  students = [
    { name: 'Alice Johnson', marks: 75 },
    { name: 'Bob Smith', marks: 42 },
    { name: 'Charlie Brown', marks: 68 },
    { name: 'Diana Wilson', marks: 55 },
    { name: 'Edward Davis', marks: 78 },
    { name: 'Fiona Garcia', marks: 33 },
    { name: 'George Miller', marks: 61 },
    { name: 'Hannah Martinez', marks: 47 },
    { name: 'Ivan Rodriguez', marks: 72 },
    { name: 'Julia Anderson', marks: 39 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundColor(marks: number): boolean {
    return marks >= 50;
  }

}
