import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpEventType, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export interface Person {
    firstname: string;
    middlename: string;
    lastname: string;
}

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return of(new HttpResponse<Person>({body: {
            firstname: 'Malcolm',
            middlename: 'Danger',
            lastname: 'S'
        }})).pipe(delay(2000));
    }
}
