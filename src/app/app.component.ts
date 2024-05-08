import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent]
})
export class AppComponent {
  title = 'Ampl Shop';
}
