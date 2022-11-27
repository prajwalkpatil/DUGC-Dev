import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UploadStatusComponent } from '../upload-status/upload-status.component';
@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css'],
})
export class CoordinatorComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    let dataRecieved = {};
    this.dataService.getAnalysis().subscribe((resp) => {
      dataRecieved = resp;
      return dataRecieved;
    });
  }
}
