import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from "./user.service";
import {DataService} from "../shared/data.service";

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should use the user name from service'), () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  }

  it ('should display the user name if the user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);

  });

  it('should not fetch data successfully if not called async', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it ("should fetch data successeffully if called async", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  })


});
