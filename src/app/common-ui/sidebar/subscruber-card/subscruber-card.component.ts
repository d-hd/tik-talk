import {Component, Input} from '@angular/core';
import {Profile} from '../../../data/interfaces/profile.interface';
import {ImgUrlPipe} from '../../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-subscruber-card',
  standalone: true,
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './subscruber-card.component.html',
  styleUrl: './subscruber-card.component.scss'
})
export class SubscruberCardComponent {
 @Input() profile!: Profile;
}
