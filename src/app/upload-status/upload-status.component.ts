import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-status',
  templateUrl: './upload-status.component.html',
  styleUrls: ['./upload-status.component.css'],
})
export class UploadStatusComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}
  analysis: any = {};
  sections: any = ['A', 'B', 'C', 'D', 'E'];
  year: any = '2022-23';
  sem: any = 'five';
  ngOnInit(): void {
    this.dataService.getAnalysis().subscribe(
      (res) => {
        this.analysis = res;
        console.log(this.analysis.new_data[this.year][this.sem]);
      },
      (err) => {
        this.toastr.error('Cannot connect to the server.', 'Server error!');
      }
    );
  }
}
