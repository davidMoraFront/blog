import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  blogTitle: string = 'My Fancy Blog';
  baseUrl: string = 'http://localhost:4200';

  constructor() {}
}
