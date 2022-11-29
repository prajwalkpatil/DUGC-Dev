import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GetAnalysisService } from '../get-analysis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc',
  templateUrl: './dugc.component.html',
  styleUrls: ['./dugc.component.css']
})
export class DugcComponent implements OnInit {

  sections: any = ['A', 'B', 'C', 'D', 'E'];
  exams : any = ['Minor 1', 'Minor 2', 'Activity'];
  sems : any = ['three', 'four', 'five', 'six', 'seven', 'eight'];
  academic_year: any = '2022-23';
  prev_year : any = '2020-21';
  dataParticulars : any = [];
  analysis1: any = {};
  analysis2: any = {};
  analysis: any = {};

  inp_sem_type: any;
  inp_sem_num: any;
  inp_exam: any;

  constructor(private dataService: DataService,
    private router: Router,
    private get-analysis: GetAnalysisService
  ) {}

  ngOnInit() : void {
    // this.dataService.getAnalysis().subscribe(
    //   (resp) => {
    //     this.analysis = resp;
    //     console.log(this.analysis['new_data']);
    //     this.analysis1 = this.analysis['new_data'][this.academic_year];
    //     this.analysis2 = this.analysis['new_data'][this.prev_year];
    //     console.log(this.analysis1);
    //     console.log(this.analysis2);
    //   }
    // );
  }
  goToURL() {
    this.router.navigate(['/charts']);
  }

}
