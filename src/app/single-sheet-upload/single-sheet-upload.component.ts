import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-sheet-upload',
  templateUrl: './single-sheet-upload.component.html',
  styleUrls: ['./single-sheet-upload.component.css'],
})
export class SingleSheetUploadComponent implements OnInit {
  Object: any;
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}
  inp: any = {
    academic_year: '2022-23',
    sem_type: '',
    semester: '',
    course: '',
    exam: '',
    section: '',
    filename: '',
  };
  selectedCourse = {
    course_code: {
      Name: '',
      'Minor 1': 'Yes',
      'Minor 2': 'Yes',
      Activity: 'Yes',
    },
  };
  statusMessage = '';
  courses: any = [];
  changeCourses(): void {
    try {
      this.selectedCourse = this.courses[this.inp.semester];
    } catch (c) {
      console.log(c);
    }
  }
  onSubmit(): void {
    console.log("You've called the onclick function.");
    this.dataService.uploadSheets(this.inp).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validateInput(): boolean {
    for (let i in this.inp) {
      if (this.inp[i] == ' ' || !this.inp[i]) {
        return false;
      }
    }
    return true;
  }
  submitForm(): void {
    if (!this.validateInput()) {
      this.statusMessage = 'ERROR: Invalid or missing field(s)';
      console.log(this.inp);
    } else {
      this.statusMessage = '';
      this.onSubmit();
    }
  }
  resetForm(): void {
    this.inp = {
      academic_year: '2022-23',
      sem_type: '',
      semester: '',
      course: '',
      exam: '',
      section: '',
      filename: '',
    };
    this.statusMessage = '';
  }
  ngOnInit(): void {
    this.dataService.getCourses().subscribe(
      (resp) => {
        this.courses = resp;
        this.courses = this.courses.course_file;
        console.log('Courses initialized.');
      },
      (error) => {
        this.toastr.error('Cannot connect to the server.', 'Server error!');
      }
    );
  }
}
