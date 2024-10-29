import {Component, Input} from '@angular/core';
import {IconUrlPipe} from '../../helpers/pipes/icon-url.pipe';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    IconUrlPipe
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconId!: string
}
