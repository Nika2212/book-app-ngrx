import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './core/services/book.service';
import { initialDataResolverFactory } from './core/utils/initial-data-resolver-factory';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/book.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './modules/components/header/header.module';
import { FooterModule } from './modules/components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      bookState: bookReducer
    }),
    HeaderModule,
    FooterModule
  ],
  providers: [
    BookService,
    {provide: APP_INITIALIZER, useFactory: initialDataResolverFactory, deps: [BookService], multi: true}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
