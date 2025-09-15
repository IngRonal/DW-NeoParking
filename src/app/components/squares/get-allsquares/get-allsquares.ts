import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SquareI } from '../../../models/squares';
import { Square } from '../../../services/square/square';

@Component({
  selector: 'app-get-allsquares',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './get-allsquares.html',
  styleUrl: './get-allsquares.css'
})
export class GetAllsquares {
squares: SquareI[] = [];

  constructor(private square: Square) {
    // suscribirse al observable para tener las plazas actualizadas
    this.square.squares$.subscribe(squares => {
      this.squares = squares;
    });
  }
}
