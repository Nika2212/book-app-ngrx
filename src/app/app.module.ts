import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './core/services/book.service';
import { initialDataResolverFactory } from './core/utils/initial-data-resolver-factory';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/book.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      bookState: bookReducer
    })
  ],
  providers: [
    BookService,
    { provide: APP_INITIALIZER, useFactory: initialDataResolverFactory, deps: [BookService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
