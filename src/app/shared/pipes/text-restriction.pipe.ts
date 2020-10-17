import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRestriction'
})
export class TextRestrictionPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    const restriction = args[0];
    let text = value;

    if (text.length >= restriction) {
      text = text.substring(0, restriction - 5);
      text += '...';
    }

    return text;
  }
}
