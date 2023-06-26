import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RentModule } from '../models/rent.module';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  //private base_Url = 'http://localhost:8080/api/leadyourway/v1/rents';
  private base_Url = 'https://leadyourway.up.railway.app/api/leadyourway/v1/rents';
  constructor(private http: HttpClient) {}
  //httpOptions = {
  //headers: new HttpHeaders({
  //'Content-type': 'application/json',
  //'Authorization': 'Bearer '+localStorage.getItem("token")
  //}),
  //};

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

  createItem(rent: RentModule): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.post(`${this.base_Url}`, rent, httpOptions).pipe(retry(3), catchError(this.handleError));
  }

  private getHttpOptions(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return { headers };
  }
}
