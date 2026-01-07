import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Siderbar } from './components/shared/siderbar/siderbar';
import { Topbard } from './components/shared/topbard/topbard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Siderbar, Topbard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LogiFlow');
}
