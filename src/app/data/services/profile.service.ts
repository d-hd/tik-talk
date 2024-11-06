import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Profile } from '../interfaces/profile.interface';
import {map, Subscriber, tap} from 'rxjs';
import {Pageble} from '../interfaces/pageble.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)

  baseUrl = 'https://icherniakov.ru/yt-course/'

  me = signal<Profile | null>(null)

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseUrl}account/test_accounts`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseUrl}account/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseUrl}account/${id}`)
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(
      `${this.baseUrl}account/me}`,
      profile
    )
  }

  getSubscribersShortList() {
    return this.http.get<Pageble<Profile>>(`${this.baseUrl}account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, 3))
      )
  }
}
