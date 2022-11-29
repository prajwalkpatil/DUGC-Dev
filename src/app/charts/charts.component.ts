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
  sem_val: any;
  this_year: any = '2022-23';
  constructor(private dataService: DataService,
    private router: Router) {
          this.sem_val = this.dataService.in_sem_val;
          this.exam_val = this.dataService.in_exam;
    }


  ngOnInit(): void {
  }

}
