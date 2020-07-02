import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyerLoginPage } from './buyer-login.page';

describe('BuyerLoginPage', () => {
  let component: BuyerLoginPage;
  let fixture: ComponentFixture<BuyerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
