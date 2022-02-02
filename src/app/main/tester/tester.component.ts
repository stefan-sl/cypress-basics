import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, shareReplay, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit, OnDestroy {

  public class$: Observable<string>;

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private _route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    console.log('Tester component');

    this._route.queryParams.pipe(
      filter(p => !!p),
      takeUntil(this._destroy$)
    ).subscribe(params => {
      console.log('Params', params);
    })

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

}
