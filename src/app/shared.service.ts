import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  blogTitle: string = 'My Fancy Blog';

  constructor() {}
}
