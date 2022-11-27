import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consolidated-sheet-upload',
  templateUrl: './consolidated-sheet-upload.component.html',
  styleUrls: ['./consolidated-sheet-upload.component.css'],
})
export class ConsolidatedSheetUploadComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}
  inp: any = {
    academic_year: '2022-23',
    semester: '',
    type: '',
    exam: '',
    file: '',
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
      console.log(this.selectedCourse);
    } catch (c) {
      console.log(c);
    }
  }
  onSubmit(): void {
    console.log("You've called the submit function.");
    this.dataService.uploadSheets(this.inp).subscribe((res) => {
      console.log(res);
    });
  }
  validateInput(): boolean {
    for (let i in this.inp) {
      console.log(i);
      if (this.inp[i] == ' ' || !this.inp[i]) {
        return false;
      }
    }
    return true;
  }
  submitForm(): void {
    if (!this.validateInput()) {
      this.statusMessage = 'ERROR: Invalid or missing field(s)';
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
        this.toastr.error('Cannot connect to server', 'Server error!');
      }
    );
  }
}
