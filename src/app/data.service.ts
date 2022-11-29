import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  in_sem_val:any;
  in_exam:any;
  URI = `${environment.API_URL}`;

  constructor(private _http: HttpClient) {}

  getAnalysis() {
    return this._http.get(`${this.URI}/analysis`);
  }
  getCourses() {
    return this._http.get(`${this.URI}/get_courses`);
  }

  getDUGC(sem_type: string, semester: string, exam: string) {
    return this._http.get(`${this.URI}/dugc`, {
      params: { sem_type, semester, exam },
    });
  }

  getCoordinator(data_file: string, course_file: string) {
    return this._http.get(`${this.URI}/coordinator`, {
      params: { data_file, course_file },
    });
  }

  uploadSheets(data: any) {
    const {
      academic_year,
      sem_type,
      semester,
      course,
      exam,
      section,
      filename,
    } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    return this._http.post(`${this.URI}/upload_sheets`, data);
  }

  uploadMultipleSheets(data: any) {
    const { academic_year, sem_type, semester, course, exam, filename } = data;
    return this._http.get(`${this.URI}/upload_multiple_sheets`, {
      params: {
        academic_year,
        sem_type,
        semester,
        course,
        exam,
        filename,
      },
    });
  }
}
