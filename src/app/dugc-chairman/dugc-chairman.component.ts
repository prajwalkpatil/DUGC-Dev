import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc-chairman',
  templateUrl: './dugc-chairman.component.html',
  styleUrls: ['./dugc-chairman.component.css'],
})
export class DugcChairmanComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}
  inp : any  = {
    
    semester: '',
    course_code: '',
    course_name :'',
  }

  statusMessage = '';
  onSubmit(): void {
    console.log("You've called the onclick function.");
    console.log(this.inp);
    // const temp_inp = (({ semester, course_code, course_name }) => ({ semester, course_code, course_name }))(this.inp);
    this.dataService.createCourse(this.inp).subscribe(
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

  ngOnInit(): void {}
}
