import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { UserModule } from '../models/user.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_Url = 'https://leadyourway.up.railway.app/api/leadyourway/v1/users';
  httpOptions = this.getHttpOptions(); // Agregar la propiedad httpOptions

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
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    } else {
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happend with request, try again');
  }

  getList(): Observable<UserModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get<UserModule>(`${this.base_Url}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getItem(id: string | null): Observable<UserModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .get<UserModule>(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateItem(Id: string, item: any): Observable<UserModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .put<UserModule>(`${this.base_Url}/${Id}`, JSON.stringify(item), httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createItem(item: any): Observable<UserModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .post<UserModule>(`${this.base_Url}`, JSON.stringify(item), httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id: string): Observable<UserModule> {
    const httpOptions = this.getHttpOptions();
    return this.http
      .delete<UserModule>(`${this.base_Url}/${id}`, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  login(email: string, password: string): Observable<number> {
    const body = {
      userEmail: email,
      userPassword: password,
    };

    return this.http
      .post<number>(`${this.base_Url}/login`, body)
      .pipe(retry(2), catchError(this.handleError));
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //base_Url = 'http://localhost:8080/api/leadyourway/v1/auth';
  base_Url = 'https://leadyourway.up.railway.app/api/leadyourway/v1/auth';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    } else {
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happend with request, try again');
  }

  login(email: string, password: string) {
    const body = {
      userEmail: email,
      userPassword: password,
    };
    return this.http
      .post(`${this.base_Url}/login`, body)
      .pipe(retry(2), catchError(this.handleError));
  }

  register(item: any): Observable<UserModule> {
    return this.http
      .post<UserModule>(`${this.base_Url}/register`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
