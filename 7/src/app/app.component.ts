import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formData: FormGroup;

  ngOnInit(): void {

    this.formData = new FormGroup(
      {
        'projectStatus': new FormControl('Critical'),
        'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)],
          this.forbiddenNamesAsync.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      });
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
        const timepit = setTimeout(() => {
          if ('Test' === control.value) {
            resolve({'nameForbidden': true});
            return;
          }
          resolve(null);
        }, 1000);
      }
    );
    return promise;
  }

  onFormSubmit() {
    console.log(this.formData.value);
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if ('Test' === control.value) {
      return {'nameForbidden': true};
    }
    return null;
  }


}
