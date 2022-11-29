import { Component, OnInit } from '@angular/core';
import { GetAnalysisService } from '../get-analysis.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  exam_val: any;
  exam_val2: any; // do not use this in further code
  sem_val: any;
  this_year: any = '2022-23';
  prev_year : any = '2020-21';

  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams : any = ['Minor 1', 'Minor 2', 'Activity'];
  analysis1: any = {};  // this_year data
  analysis2: any = {};  // prev_year data
  analysis: any = {};
  sno : any = 0;



  course_count : number = 0;
  course_codes : any = [];
  runThis() {
    this.analysis1 = this.analysis1[this.sem_val];
    this.analysis2 = this.analysis2[this.sem_val];
    console.log(this.analysis1);
    console.log(this.analysis2);
  }
  constructor(private dataService: DataService,
    private router: Router) {
          this.sem_val = this.dataService.in_sem_val;
          this.exam_val = this.dataService.in_exam;
          if(this.exam_val === 'm1') {
            this.exam_val2 = 'Minor 1';
          }
          else if(this.exam_val === 'm2') {
            this.exam_val2 = 'Minor 2';
          }

    }

  ngOnInit(): void {
    this.dataService.getAnalysis().subscribe(
      (resp) => {
        this.analysis = resp;
        console.log(this.sem_val);
        this.analysis1 = this.analysis['new_data'][this.this_year][this.sem_val];
        this.analysis2 = this.analysis['new_data'][this.prev_year][this.sem_val];
        console.log(this.analysis1);
        console.log(this.analysis2);
        for (const [i,j] of Object.entries(this.analysis1)) {
          this.course_codes.push(i);
          this.course_count = this.course_count + 1;
        }
        console.log(this.course_codes);
        // if(this.exam_val === 'm1') {
        //   this.analysis1 = this.analysis1[0];
        // }
        // else if(this.exam_val === 'm2') {
        //   this.analysis1 = this.analysis1[1];
        // }
        // else {
        //   this.analysis1 = this.analysis1[2];
        // }
      }
    );
  }

}
