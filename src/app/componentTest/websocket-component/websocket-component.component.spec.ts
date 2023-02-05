import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketComponentComponent } from './websocket-component.component';

describe('WebsocketComponentComponent', () => {
  let component: WebsocketComponentComponent;
  let fixture: ComponentFixture<WebsocketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsocketComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsocketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
