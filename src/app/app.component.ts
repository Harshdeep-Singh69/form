import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companyRecords: any = [];
  myForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(31), Validators.pattern(/^[a-zA-Z0-9\s]+$/)]),
    companyAdminName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(31), Validators.pattern(/^[a-zA-Z\s]+$/)]),
    contactNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\d\s+]+$/)]),
    emailId: new FormControl('', [Validators.email]),
    dateOfRegistration: new FormControl('')
  })

  onClickSubmitForm() {
    let obj: any = {
      companyName: this.myForm.value.companyName,
      companyAdminName: this.myForm.value.companyAdminName,
      contactNumber: this.myForm.value.contactNumber,
      emailId: this.myForm.value.emailId,
      dateOfRegistration: this.myForm.value.dateOfRegistration
    }
    this.companyRecords.push(obj)
    this.myForm.reset();


  }

}
