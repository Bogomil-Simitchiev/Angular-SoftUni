import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frontend-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-information.component.html',
  styleUrl: './frontend-information.component.css'
})
export class FrontendInformationComponent {
  imageSrc = '../../../public/assets/snimka16.jpg';
  bogomil = {
    name: 'Bogomil',
    age: 23,
    profession: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'],
    experience: '2 years of experience in building responsive and interactive web applications.',
    bio: 'Bogomil is a passionate frontend developer with a keen eye for design and detail. He enjoys transforming ideas into reality using code and is always eager to learn new technologies and improve his skills.'
  };
}
