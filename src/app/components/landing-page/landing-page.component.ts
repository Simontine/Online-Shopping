import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { ProductCatalogComponent } from "../product-catalog/product-catalog.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [RouterOutlet, NavComponent, ProductCatalogComponent]
})
export class LandingPageComponent {
  total = 30;

}
