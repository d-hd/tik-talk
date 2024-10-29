import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconUrl',
  standalone: true
})
export class IconUrlPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) {
      return null
    }
    return `/assets/svg/sprite.svg#${value}`
  }
}
