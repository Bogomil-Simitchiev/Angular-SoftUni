import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyName = 'DVB Company';
  description = 'DVB Company is an innovative IT company founded by three passionate technologists: Bogomil, Valentin, and Iordan. Our mission is to deliver top-notch IT solutions and services.';
  history = 'Founded in 2023, DVB Company has quickly grown from a small startup to a reputable firm known for its dedication to quality and innovation.';
  mission = 'To provide cutting-edge IT solutions that empower businesses to achieve their goals.';
  values = [
    'Innovation: We constantly seek new ways to solve problems and improve processes.',
    'Integrity: We conduct our business with honesty and transparency.',
    'Excellence: We strive for the highest standards in everything we do.'
  ];
  services = [
    'Custom Software Development',
    'IT Consulting',
    'UI/UX Design',
    'Project Management'
  ];
  team = [
    {
      name: 'Bogomil',
      role: 'Frontend Engineer',
      bio: 'Bogomil is a skilled software engineer with over 2 years of experience in developing scalable web applications. He specializes in frontend and backend development.'
    },
    {
      name: 'Valentin',
      role: 'Backend Engineer',
      bio: 'Valentin has a keen eye for detail and excels in managing complex projects. With a background in agile methodologies, he ensures that projects are delivered on time and within budget.'
    },
    {
      name: 'Iordan',
      role: 'UX/UI Designer',
      bio: 'Iordan is a creative UX/UI designer with a passion for creating intuitive and user-friendly interfaces. He has a strong background in graphic design and user experience.'
    }
  ];
}
