import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-module-manager',
  templateUrl: './module-manager.component.html',
  styleUrls: ['./module-manager.component.scss']
})
export class ModuleManagerComponent implements OnInit {
  allModules;
  selectedModule;

  moduleForm: FormGroup;

  saving = false;

  alert = null;

  validationMessages = {
    moduleName: [
      { type: 'required', message: 'Module name is required' }
    ]
  };

  constructor(
    private moduleService: ModuleService,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.authService.currentUserValue);

    this.createForm();

    this.getAllModules();
  }

  selectModule(module) {
    console.log(module);
    this.selectedModule = module;
  }

  createForm() {
    this.moduleForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      createdBy: [this.authService.currentUserValue.id, Validators.required]
    });
  }

  saveModule(value) {
    console.log(value);
    this.saving = true;

    this.moduleService.addNewModule(
      value
    ).pipe(first()).subscribe(
      data => {
        this.saving = false;
        console.log('Add module', data);
        this.alert = {
          type: 'success',
          message: 'New module added successfully'
        };

        this.getAllModules();
        // this.router.navigate([this.returnUrl]);
      },
      error => {
        this.saving = false;
        if (error.error) {
          this.alert = {
            type: 'danger',
            message: error.error.error
          };
        }
        console.log(error);
      }
    );
  }

  closeAlert() {
    this.alert = null;
  }

  getAllModules() {
    this.moduleService.getAllModules().subscribe((data) => {
      this.allModules = data;
    });
  }

}
