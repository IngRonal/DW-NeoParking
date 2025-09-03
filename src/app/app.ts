import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { Content } from './components/layout/content/content';
import { Aside } from './components/layout/aside/aside';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer, Content, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parking');
}
