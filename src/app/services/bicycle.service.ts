import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BicycleModule } from '../models/bicycle.module';

@Injectable({
  providedIn: 'root',
})
export class BicycleService {
  //private base_Url = 'http://localhost:8080/api/leadyourway/v1/bicycles';
  private base_Url = 'https://leadyourway.up.railway.app/api/leadyourway/v1/bicycles';

  constructor(private http: HttpClient) {}

  private getHttpOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return { headers };
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with the request, please try again later.');
  }

  getList(): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.get(`${this.base_Url}`).pipe(retry(3), catchError(this.handleError));
  }

  getItem(id: number): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  createItem(id: number, bicycle: BicycleModule): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .post(`${this.base_Url}/${id}`, bicycle, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateItem(id: number, bicycle: BicycleModule): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .put(`${this.base_Url}/${id}`, bicycle, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteItem(id: number): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .delete(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  getBicyclesByDateRange(startDate: string, endDate: string): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get(`${this.base_Url}/available?start_date=${startDate}&end_date=${endDate}`)
      .pipe(retry(3), catchError(this.handleError));
  }
}
