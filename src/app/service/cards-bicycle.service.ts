import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CardsBicycle } from '../models/cards-bicycle.model';

@Injectable({
  providedIn: 'root'
})
export class CardsBicycleService {
  private base_Url = 'http://localhost:3000/bicycles';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }

  getBicycles(): Observable<CardsBicycle[]> {
    return this.http.get<CardsBicycle[]>(this.base_Url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}