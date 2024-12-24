import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Site pour la gestion d\'exportation des colis',
      description: 'Une application de gestion de colis permet d\'avoir un suivi sur tous les colis exporté dans les conteneurs.',
      image: 'assets/colis.jpg',
      link: 'https://gestion-colis-export-oxys24rph-joels-projects-447bccf4.vercel.app/'
    },
    {
      title: 'Application bancaire',
      description: 'Application permettant de gérer les clients et les comptes bancaires.',
      image: 'assets/bank.jpg',
      link: 'https://github.com/monportfolio/projet2'
    }
  ];
}
