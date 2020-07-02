import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyerSigninPage } from './buyer-signin.page';

describe('BuyerSigninPage', () => {
  let component: BuyerSigninPage;
  let fixture: ComponentFixture<BuyerSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerSigninPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
