import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SquareI } from '../../models/squares';

@Injectable({
  providedIn: 'root'
})
export class Square {
  private squares = new BehaviorSubject<SquareI[]>([
    {
      id: 1,
      number: 1,
      type: 'Carro',
      status: 'Libre',
      parkingId: 1
    },
    {
      id: 2,
      number: 2,
      type: 'Moto',
      status: 'Ocupada',
      parkingId: 1
    }
  ]);

  squares$ = this.squares.asObservable();

  constructor() {}

  getSquares(): SquareI[] {
    return this.squares.value;
  }

  addSquare(square: SquareI): void {
    const squares = this.squares.value;
    square.id = squares.length ? Math.max(...squares.map(s => s.id ?? 0)) + 1 : 1;
    this.squares.next([...squares, square]);
  }

  updateSquare(updatedSquare: SquareI): void {
    const squares = this.squares.value.map(s =>
      s.id === updatedSquare.id ? updatedSquare : s
    );
    this.squares.next(squares);
  }
}
