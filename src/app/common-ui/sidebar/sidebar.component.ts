import {Component, inject} from '@angular/core';
import {SvgComponent} from '../svg/svg.component';
import {AsyncPipe, JsonPipe, NgForOf} from '@angular/common';
import {SubscruberCardComponent} from './subscruber-card/subscruber-card.component';
import {RouterLink} from '@angular/router';
import {ProfileService} from '../../data/services/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgComponent, NgForOf, SubscruberCardComponent, RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)

  subscribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chats'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    },
  ]
}
