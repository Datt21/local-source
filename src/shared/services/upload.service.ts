import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {
  }

  uploadFileToS3(url, formData): Observable<any> {
    const request  = new HttpRequest('PUT', url, formData, {
      reportProgress: true,
    });
    return this.http.request<any>(request).pipe(
      filter(x => !!x),
      map(event => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round(100 * event.loaded / event.total);
              return { status: 'progress', message: progress };
            case HttpEventType.Response:
              return { status: 'finish', message: 100 };
            default:
              return null;
          }
        },
      ),
      filter(x => !!x));
  }

}
