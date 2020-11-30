import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SharedService] });
    service = TestBed.inject(SharedService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`blogTitle has default value`, () => {
    expect(service.blogTitle).toEqual(`My Fancy Blog`);
  });

  it(`baseUrl has default value`, () => {
    expect(service.baseUrl).toEqual(`http://localhost:4200`);
  });
});
