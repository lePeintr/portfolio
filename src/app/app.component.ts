import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule, Router} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgFor,NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ContactComponent,
    AboutComponent,ProjectsComponent,NgIf,NgFor,RouterModule,
    SkillsComponent,FooterComponent,HomeComponent,ExperiencesComponent,LoisirsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  
  contact = {
    name: '',
    email: '',
    message: ''
  };
  
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.contact);
    }
  }
  
 

}
