import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {
  public favoriteBooksCount: number;

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  private getFavoriteBooksCount(): void {
    const sub1 = this.store.select(store => store.bookState.favoriteBookIds)
      .subscribe(payload => {
        this.favoriteBooksCount = payload.length;
        this.cdr.detectChanges();
      });

    this.addSubscription(sub1);
  }

  public ngOnInit(): void {
    this.getFavoriteBooksCount();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }

}
