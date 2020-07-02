import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerLoginPage } from './seller-login.page';

describe('SellerLoginPage', () => {
  let component: SellerLoginPage;
  let fixture: ComponentFixture<SellerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
