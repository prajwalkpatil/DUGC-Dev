import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-single-sheet-upload',
  templateUrl: './single-sheet-upload.component.html',
  styleUrls: ['./single-sheet-upload.component.css'],
})
export class SingleSheetUploadComponent implements OnInit {
  constructor() {}
  inp = {
    academic_year: '2022-23',
    semester: '',
    type: '',
    section: 'A',
    exam: 'm1',
    file: '',
  };
  ngOnInit(): void {}
}
