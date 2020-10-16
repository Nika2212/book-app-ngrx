import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/book.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { BaseComponent } from '../../../core/base/base.component';
import { AddFavoriteAction, RemoveFavoriteAction } from '../../../store/actions/book.action';
import { Storage } from '../../../core/utils/storage';
import { StorageGroups } from '../../../core/enums/storage-groups';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent extends BaseComponent implements OnInit, OnDestroy {
  public storedBooks: Book[] = [];

  private favoriteBookIds: string[] = [];

  constructor(
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    super();
  }

  private getData(): void {
    const sub1 = this.store.select(store => store.bookState.storedBooks)
      .subscribe(payload => {
        this.storedBooks = payload;
        this.cdr.detectChanges();
      });
    const sub2 = this.store.select(store => store.bookState.favoriteBookIds)
      .subscribe(payload => {
        this.favoriteBookIds = payload;
        this.cdr.detectChanges();
      });

    this.addSubscription(sub1);
    this.addSubscription(sub2);
  }

  private toggleFavoriteState(book: Book): void {
    if (this.isFavorite(book.id)) {
      this.store.dispatch(new RemoveFavoriteAction(book.id));
      Storage.remove<Book>(StorageGroups.FAVORITE_BOOKS, book.id);
    } else {
      this.store.dispatch(new AddFavoriteAction(book));
      Storage.set<Book>(StorageGroups.FAVORITE_BOOKS, book);
    }
  }

  private openDetails(book: Book): void {
    this.router.navigate(['details', book.id]);
  }

  public ngOnInit(): void {
    this.getData();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }


  public onDetailsClick(book: Book): void {
    this.openDetails(book);
  }

  public onFavoriteClick(book: Book): void {
    this.toggleFavoriteState(book);
  }

  public isFavorite(id: string): boolean {
    return this.favoriteBookIds.includes(id);
  }
}
