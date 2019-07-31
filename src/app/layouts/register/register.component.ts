import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  saving = false;

  userDetailsForm: FormGroup;

  matchingPasswordsGroup: FormGroup;
  countryPhoneGroup: FormGroup;

  parentErrorStateMatcher = new ParentErrorStateMatcher();

  genders = [
    'Male',
    'Female',
    'Other'
  ];

  roles = [
    { type: 'Student', value: false},
    { type: 'Lecturer', value: true }
  ];

  countries = [
    new Country('UY', 'Uruguay'),
    new Country('US', 'United States'),
    new Country('AR', 'Argentina'),
    new Country('LK', 'Sri Lanka')
  ];


  validationMessages = {
    fullname: [
      { type: 'required', message: 'Full name is required' }
    ],
    bio: [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    gender: [
      { type: 'required', message: 'Please select your gender' },
    ],
    role: [
      { type: 'required', message: 'Please select the account type' }
    ],
    birthday: [
      { type: 'required', message: 'Please insert your birthday' },
    ],
    phone: [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // matching passwords validation
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    const country = new FormControl('', Validators.required);

    const phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.countryPhoneGroup = new FormGroup({
      country,
      phone
    });

    // user details form validations
    this.userDetailsForm = this.fb.group({
      fullname: ['', Validators.required],
      bio: ['', Validators.maxLength(256)],
      birthday: ['', Validators.required],
      gender: new FormControl('', Validators.required),
      lecturer: new FormControl('', Validators.required),
      countryPhone: this.countryPhoneGroup,
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matchingPasswords: this.matchingPasswordsGroup,
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }

  onSubmitUserDetails(value) {
    console.log(value);

    this.saving = true;

    this.authService.register(
      value
    ).pipe(first()).subscribe(
      data => {
        this.toastr.success('Success', 'User registered in successfully', {
          timeOut: 1000
        });
        // this.router.navigate([this.returnUrl]);
      },
      error => {
        this.saving = false;
        console.log(error);
        const validationErrors = error.error;
        Object.keys(validationErrors).forEach(prop => {
          const formControl = this.userDetailsForm.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: validationErrors[prop]
            });
          }
        });
      }
    );
  }
}
