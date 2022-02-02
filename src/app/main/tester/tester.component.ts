import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { any } from 'cypress/types/bluebird';

export interface Person {
  address: any;
  company: any;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit, OnDestroy {

  public class$: Observable<string>;
  public retrievedPersons$: Observable<Person[]>;
  public comments$: Observable<any[]>;

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private _route: ActivatedRoute,
    private _http: HttpClient
  ) { }

  public ngOnInit(): void {
    this.class$ = this._route.queryParams.pipe(
      filter(p => !!p),
      map(p => {
        return p['color'];
      }),
      shareReplay(1)
    );
  }

  public ngOnDestroy(): void {
      this._destroy$.next(true);
  }

  public handleHttpRequest() {
    this.retrievedPersons$ = this._http.get('https://jsonplaceholder.cypress.io/users').pipe(
      map(response => response as Person[]),
    );
  }

  public handleHttpRequest2() {
    this.comments$ = this._http.get('https://jsonplaceholder.cypress.io/comments').pipe(
      map(response => response as Person[]),
    );
  }

}
