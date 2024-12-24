import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { icon: 'fa-code', name: 'JavaScript' },
    { icon: 'fa-angular', name: 'Angular' },
    { icon: 'fa-html5', name: 'HTML' },
    { icon: 'fa-css3', name: 'CSS' }
  ];
}
