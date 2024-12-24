import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  currentIndex = 0;

  experiences = [
    {
      title: '(Stage fin d\'étude)Analyste Fonctionnel Junior / Développeur Fullstack',
      company: 'CAPGEMINI',
      date: 'Février 2022 - Aout 2022',
      projectTitle: 'Les Halles/Portail d\'API pour la SNCF visant à concentrer,consolider et diffuser les données nécessaires à la production ferroviaire ainsi qu\'à l\'information voyageur et Développement d\'une IHM pour la gestion des prpriété de déploiement de Les Halles.',
      tasks: [
        'Analyse et recueil des besoins',
        'Conception technique',
        'Rédaction et mise à jour de la documentation technique',
        'Développement des évolutions',
        'Analyse et correction des défauts et anomalies',
        'Réalisation des test unitaires et intégrations',
        'Livraison des évolutions',
        'Déploiement d\'application',
        'Réaisation des démos des évolutions réalisées'
      ],
      envTechnique: ['Java','Springboot','Angular','Rabbit MQ','Docker','Maven','Kubernetes','Jenkins','Mongo DB','PostgreSQL','Git','JIRA','Confluence','SCRUM']
    },
    {
      title: 'Consultant Technique-Fonctionnel',
      company: 'FLOWBIRD',
      date: 'Novembre 2022 - Septembre 2024',
      projectTitle: 'Transport, Billetique, Gestion d\'amendes.',
      tasks: [
        'Maintenance corrective et évolutive de l\’application', 
        'Réalisation des tests unitaires ,tests intégrations', 
        'Analyse des besoins et rédaction de la documentation', 
        'Réalisation des livraisons' 
      ],
      envTechnique: ['Java','Springboot','Angular','Docker','Maven','Kubernetes','Jenkins','MySQL','PostgreSQL','Git','JIRA','Confluence','SCRUM']
    },
    {
      title: 'Consultant Technique-Fonctionnel',
      company: 'URSSAF',
      date: 'Septembre 2024 - En cours',
      projectTitle: 'Evolutions des APIS, Migration de la base de données',
      tasks: [
        'Maintenance corrective et évolutive de l\’application Suivi DSN(Déclarations sociales Nominatives)',
        'Evolution des APIs (rattachement, gasc-search, openapi, inscriptions) et contrat de services (swagger)',
        'Migration de base de données (de newabn à GASC)', 
        'Réalisation des tests unitaires, tests Cucumber, tests d\’intégration', 
        'Mise en place de l\’automatisation des tests des APIs', 
        'Analyse des besoins, rédaction et mise à jour de la documentation', 
        'Réalisation des livraisons et démos'    
      ],
      envTechnique: ['Java','Springboot','Angular','KAFKA','Docker','Maven','Swagger','Kubernetes','OpenLens','Jenkins','sqlite','PostgreSQL','Git','JIRA','Confluence','SCRUM','LINUX']
    }
  ];

  nextSlide() {
    if (this.currentIndex < this.experiences.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
