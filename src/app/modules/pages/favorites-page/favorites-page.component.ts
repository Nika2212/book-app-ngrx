import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Book } from '../../../shared/models/book.model';
import { ClearFavoritesAction, RemoveFavoriteAction } from '../../../store/actions/book.action';
import { Storage } from '../../../core/utils/storage';
import { StorageGroups } from '../../../core/enums/storage-groups';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent extends BaseComponent implements OnInit, OnDestroy {
  public favoriteBooks: Book[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  private openDetails(book: Book): void {
    this.router.navigate(['details', book.id]);
  }

  private removeFromFavorites(book: Book): void {
    this.store.dispatch(new RemoveFavoriteAction(book.id));
    Storage.remove<Book>(StorageGroups.FAVORITE_BOOKS, book.id);
  }

  private getFavoriteBooks(): void {
    const sub1 = this.store.select(store => store.bookState.favoriteBooks)
      .subscribe(payload => {
        this.favoriteBooks = payload;
        this.cdr.detectChanges();
      });

    this.addSubscription(sub1);
  }

  private deleteFavoriteBooks(): void {
    this.store.dispatch(new ClearFavoritesAction());
  }

  public ngOnInit(): void {
    this.getFavoriteBooks();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  public onDetailsClick(book: Book): void {
    this.openDetails(book);
  }

  public onFavoriteClick(book: Book): void {
    this.removeFromFavorites(book);
  }

  public onTrashClick(): void {
    this.deleteFavoriteBooks();
  }
}
