import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  url = 'http://localhost/nitin/';
  constructor(private http: HttpClient) {}

  getAllClass(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url +
        'allclasses/read.php?pageno=' +
        pageno +
        '&pagesize=' +
        pagesize
    );
  }

  getSubjectList(id): Observable<any> {
    return this.http.get(this.url + 'allsubject/read.php?classNo=' + id);
  }

  getChapterList(id): Observable<any> {
    return this.http.get(this.url + 'allchapters/read.php?subNo=' + id);
  }
}
