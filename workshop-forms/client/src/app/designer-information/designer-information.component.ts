import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-designer-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designer-information.component.html',
  styleUrl: './designer-information.component.css'
})
export class DesignerInformationComponent {
  iordan = {
    name: 'Iordan',
    age: 25,
    profession: 'UX/UI Designer',
    skills: ['Adobe XD', 'Sketch', 'Figma', 'Wireframing', 'Prototyping'],
    experience: '3 years of experience in designing user-centric interfaces and improving user experiences.',
    bio: 'Iordan is a creative UX/UI Designer with a passion for crafting intuitive and visually appealing user interfaces. He has a keen eye for detail and a strong understanding of user behavior, which helps him create designs that are both functional and engaging.'
  };
}
