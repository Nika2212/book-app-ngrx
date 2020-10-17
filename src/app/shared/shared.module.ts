import { NgModule } from '@angular/core';
import { TextRestrictionPipe } from './pipes/text-restriction.pipe';

@NgModule({
  declarations: [
    TextRestrictionPipe,
  ],
  imports: [],
  exports: [
    TextRestrictionPipe
  ]
})
export class SharedModule {}
