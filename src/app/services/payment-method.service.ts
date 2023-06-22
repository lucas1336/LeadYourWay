import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { PaymentMethod } from '../models/payment-method/payment-method.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
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

  getItem(id: number): Observable<any> {
    return this.http
      .get(`${this.base_Url}/cards/${id}`)
      .pipe(retry(3), catchError(this.handleError));
  }
  createItem(card: PaymentMethod): Observable<any> {
    return this.http
      .post(`${this.base_Url}/cards/1`, card)
      .pipe(retry(3), catchError(this.handleError));
  }
}
