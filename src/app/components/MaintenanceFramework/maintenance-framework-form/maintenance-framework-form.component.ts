import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FrameworkService } from 'src/app/services/framework.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maintenance-framework-form',
  templateUrl: './maintenance-framework-form.component.html',
  styleUrls: ['./maintenance-framework-form.component.css']
})
export class MaintenanceFrameworkFormComponent implements OnChanges {
  @Input() FormData: any;
  data!: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private frameworkService: FrameworkService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  ngOnChanges(changes: any) {
    if (changes.FormData.currentValue) {
      this.form.patchValue({ name: this.FormData.frameworksName, comment: this.FormData.frameworksDescription });
    }
  }

  submitForm() {
    // console.log(this.FormData)
    if(this.FormData){
      this.editForm()
    }else{
      this.addForm()
    }
  }

  editForm() {
    const formData = this.form.value;
    const frameworkName = formData.name;
    const frameworkDescription = formData.comment;
    this.frameworkService.editFramework(this.FormData.frameworksID,frameworkName,frameworkDescription).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  addForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      const frameworkName = formData.name;
      const frameworkDescription = formData.comment;
      this.frameworkService.createNewFramework(frameworkName, frameworkDescription).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

  }
}
