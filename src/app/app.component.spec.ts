import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const dataService = TestBed.inject(DataService);
    spyOn(dataService, 'loadFilms').and.returnValue(of([]));
    spyOn(dataService, 'loadPeople').and.returnValue(of([]));
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
