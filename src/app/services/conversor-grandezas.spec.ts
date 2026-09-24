import { TestBed } from '@angular/core/testing';

import { ConversorGrandezas } from './conversor-grandezas';

describe('ConversorGrandezas', () => {
  let service: ConversorGrandezas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorGrandezas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
