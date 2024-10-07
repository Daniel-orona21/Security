import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtaquesComponent } from './componentes/ataques/ataques.component';
import { ConfidencialidadComponent } from './componentes/confidencialidad/confidencialidad.component';
import { PrincipiosComponent } from './componentes/principios/principios.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AtaquesComponent, ConfidencialidadComponent, PrincipiosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Seguridad de La Información'
  componenteActual: string = ''; // Inicia mostrando el componente de ataques

  mostrarComponente(componente: string) {
    this.componenteActual = componente;
    setTimeout(() => {
      const componentesElement = document.querySelector('.componentes') as HTMLElement;
      componentesElement.scrollIntoView({ behavior: 'smooth' });
    }, 10); // El timeout permite que Angular actualice la vista antes de hacer scroll
  }

  private lastScrollTop: number = 0;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollTop = window.scrollY;
    const introElement = document.querySelector('.intro') as HTMLElement;
    const scroll = document.querySelector('.scroll') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;
    const sub = document.querySelector('.subcontenido') as HTMLElement;

    if (currentScrollTop > this.lastScrollTop) {
      introElement.classList.add('hidden');
      
      
    } 
    introElement.style.height = '99vh';
    setTimeout(() => {
      introElement.style.display = 'none';
      scroll.style.overflow = 'scroll';
    }, 900);

    setTimeout(() => {
      header.classList.add('entrada');
      sub.classList.add('entrada');
    }, 300);

    this.lastScrollTop = currentScrollTop;
  }

  }
