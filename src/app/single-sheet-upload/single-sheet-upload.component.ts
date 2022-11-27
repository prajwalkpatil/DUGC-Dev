import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
interface Course {
  Name: string;
  'Minor 1': string;
  'Minor 2': string;
}
@Component({
  selector: 'app-single-sheet-upload',
  templateUrl: './single-sheet-upload.component.html',
  styleUrls: ['./single-sheet-upload.component.css'],
})
export class SingleSheetUploadComponent implements OnInit {
  Object: any;
  constructor(private dataService: DataService) {}
  inp: any = {
    academic_year: '2022-23',
    sem_type: '',
    semester: '',
    course: '',
    exam: 'm1',
    section: 'A',
    filename: '',
  };

  courses: any = {};
  selectedCourse: any = { Name: '', 'Minor 1': '', 'Minor 2': '' };
  changeCourses(): void {
    try {
      this.selectedCourse = this.courses[this.inp.semester];
      console.log(this.selectedCourse);
    } catch (c) {
      console.log(c);
    }
  }
  onSubmit(): void {
    console.log("You've called the onclick function.");
    this.dataService.uploadSheets(this.inp);
  }
  ngOnInit(): void {
    this.dataService.getCourses().subscribe((resp) => {
      this.courses = resp;
      this.courses = this.courses.course_file;
      console.log('Courses initialized.');
    });
  }
}
