import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerSigninPage } from './seller-signin.page';

describe('SellerSigninPage', () => {
  let component: SellerSigninPage;
  let fixture: ComponentFixture<SellerSigninPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSigninPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerSigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
