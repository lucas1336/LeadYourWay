import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BicycleModule } from '../models/bicycle/bicycle.module';

@Injectable({
  providedIn: 'root',
})
export class BicycleService {
  private base_Url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }

  getBicycles(): Observable<BicycleModule[]> {
    return this.http
      .get<BicycleModule[]>(`${this.base_Url}/bicycles`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getBicycle(id: number): Observable<BicycleModule> {
    return this.http
      .get<BicycleModule>(`${this.base_Url}/bicycles/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
