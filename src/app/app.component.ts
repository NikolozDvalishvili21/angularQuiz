import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersComponent } from "./orders/orders.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz';
}
