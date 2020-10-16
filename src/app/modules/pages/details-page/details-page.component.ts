import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { Storage } from '../../../core/utils/storage';
import { StorageGroups } from '../../../core/enums/storage-groups';
import { Book } from '../../../shared/models/book.model';
import { AddFavoriteAction, RemoveFavoriteAction } from '../../../store/actions/book.action';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPageComponent extends BaseComponent implements OnInit, OnDestroy {
  private selectedBookId: string;
  private favoriteBookIds: string[];

  public selectedBook: Book;
  public isFavorite: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  private getBookId(): void {
    this.selectedBookId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  private getFavoriteBookIds(): void {
    const sub1 = this.store.select(store => store.bookState.favoriteBookIds)
      .subscribe(payload => {
        this.favoriteBookIds = payload;
        this.isFavorite = this.favoriteBookIds.includes(this.selectedBookId);
      });

    this.addSubscription(sub1);
  }

  private getBookDetails(): void {
    const sub1 = this.store.select(store => store.bookState.storedBooks)
      .subscribe(payload => {
        const selectedBook = payload.find(e => e.id === this.selectedBookId);

        if (selectedBook) {
          this.selectedBook = selectedBook;
          this.cdr.detectChanges();
        } else {
          this.router.navigate(['main']);
        }
      });

    this.addSubscription(sub1);
  }

  private toggleFavoriteState(): void {
    const book = this.selectedBook;

    if (this.isFavorite) {
      this.store.dispatch(new RemoveFavoriteAction(book.id));
      Storage.remove<Book>(StorageGroups.FAVORITE_BOOKS, book.id);
    } else {
      this.store.dispatch(new AddFavoriteAction(book));
      Storage.set<Book>(StorageGroups.FAVORITE_BOOKS, book);
    }
  }

  public ngOnInit(): void {
    this.getBookId();
    this.getFavoriteBookIds();
    this.getBookDetails();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  public onFavoriteClick(): void {
    this.toggleFavoriteState();
  }
}
