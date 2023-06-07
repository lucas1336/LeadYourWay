import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BicycleModule } from '../models/bicycle/bicycle.module';
import { Bicycle2 } from '../models/bicycle/bicycle2.model';
import { BicycleModule2 } from '../models/bicycle-model.model';

@Injectable({
  providedIn: 'root',
})
export class BicycleService {
  private base_Url = 'http://localhost:8080/api/leadyourway/v1';

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

  createBicycle(userId: number, bicycle: FormData): Observable<any> {
    console.log(bicycle);
    return this.http
      .post<Bicycle2>(`${this.base_Url}/bicycles/${userId}`, bicycle)
      .pipe(retry(2), catchError(this.handleError));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  getList(): Observable<any> {
    return this.http.get(`${this.base_Url}/bicycles`).pipe(retry(3), catchError(this.handleError));
  }

  getItem(id: number): Observable<any> {
    return this.http
      .get(`${this.base_Url}/bicycles/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  createItem(id: number, bicycle: BicycleModule2): Observable<any> {
    return this.http
      .post(`${this.base_Url}/bicycles/${id}`, bicycle)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateItem(id: number, bicycle: BicycleModule2): Observable<any> {
    return this.http
      .put(`${this.base_Url}/bicycles/${id}`, bicycle)
      .pipe(retry(3), catchError(this.handleError));
  }

  deleteItem(id: number): Observable<any> {
    return this.http
      .delete(`${this.base_Url}/bicycles/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }
}
