import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-information.component.html',
  styleUrl: './backend-information.component.css'
})
export class BackendInformationComponent {
  imageUrl: string = 'assets/images/valentin.jpg';
  valentin = {
    name: 'Valentin',
    age: 25,
    profession: 'Backend Developer',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'Docker'],
    experience: '3 years of experience in building scalable backend systems.',
    bio: 'Valentin is a dedicated backend developer with a strong background in server-side technologies. He is proficient in creating robust APIs and ensuring the smooth operation of backend services.'
  };
}
