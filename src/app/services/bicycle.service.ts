import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BicycleModule } from '../models/bicycle-model.model';

@Injectable({
  providedIn: 'root',
})
export class BicycleService {
  private base_Url = 'http://localhost:8080/api/leadyourway/v1';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later.');
  }

  getList(): Observable<any> {
    return this.http.get(`${this.base_Url}/bicycles`).pipe(retry(3), catchError(this.handleError));
  }

  getItem(id: number): Observable<any> {
    return this.http
      .get(`${this.base_Url}/bicycles/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  createItem(id: number, bicycle: BicycleModule): Observable<any> {
    return this.http
      .post(`${this.base_Url}/bicycles/${id}`, bicycle)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateItem(id: number, bicycle: BicycleModule): Observable<any> {
    return this.http
      .put(`${this.base_Url}/bicycles/${id}`, bicycle)
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteItem(id: number): Observable<any> {
    return this.http
      .delete(`${this.base_Url}/bicycles/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getBicyclesByDateRange(startDate: string, endDate: string): Observable<any> {
    return this.http
      .get(`${this.base_Url}/bicycles/available?start_date=${startDate}&end_date=${endDate}`)
      .pipe(retry(3), catchError(this.handleError));
  }
}
