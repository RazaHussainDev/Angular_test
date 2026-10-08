import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar,Footer,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('test');
}
