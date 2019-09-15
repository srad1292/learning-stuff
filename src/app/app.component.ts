import { Component } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';

import { Student } from './student.model';
import { StudentService } from './student.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-stuff';

  students: Student[] = [];

  appForm;
  test: string;

  options: string[] = ['x-ray', 'ct-scan', '2d-echo', 'reflex', 'alergy', 'cat-scan', 'aaa', 'ab', 'abba', 'bac', 'caememe'];
  filteredOptions: string[];
  
  constructor(private studentservice: StudentService, private fb: FormBuilder) {
    this.appForm = this.fb.group({
      testName: new FormControl('', Validators.required),
    }, {updateOn: 'submit'});
  
  }

  ngOnInit() {
      // const studentsObservable = this.studentservice.getStudents();
      // studentsObservable.subscribe(
      //   (studentsData: Student[]) => {
      //     this.students = studentsData;
      //   }
      // );

      this.appForm.get('testName').valueChanges.subscribe( value => {
        console.log('yo');
      });
  }
  
  private _filter(value: string): string[] {
    const filterValue = (value || '').toLowerCase();

    const filtered = this.options.filter(option => option.toLowerCase().includes(filterValue));
    console.log('filtered: ', filtered);
    return filtered;
  }

  submitForm() {
    if(this.appForm.valid) {
      this.test = this.appForm.get('testName').value;
    }

    else {
      this.test = 'invalid input';
    }
  }

}
