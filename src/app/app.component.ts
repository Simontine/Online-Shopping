import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ServicesComponent } from "./components/services/services.component";
import { SearchComponent } from "./components/search/search.component";
import { NavComponent } from './components/nav/nav.component';
import { BlogsComponent } from "./components/blogs/blogs.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LandingPageComponent, NavComponent, ServicesComponent, SearchComponent, BlogsComponent, FooterComponent]
})
export class AppComponent {
  title = 'Ampl Shop';
}
