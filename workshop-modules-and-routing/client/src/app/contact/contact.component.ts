import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  companyInfo = {
    address: '123 Tech Avenue, Sofia, Bulgaria',
    phone: '+359 123 456 789',
    email: 'info@dvbcompany.com'
  };
}
