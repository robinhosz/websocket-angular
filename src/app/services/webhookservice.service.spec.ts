import { TestBed } from '@angular/core/testing';

import { WebhookserviceService } from './webhookservice.service';

describe('WebhookserviceService', () => {
  let service: WebhookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebhookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
