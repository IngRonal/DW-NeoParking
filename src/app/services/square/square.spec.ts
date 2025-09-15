import { TestBed } from '@angular/core/testing';
import { Square } from './square';
import { SquareI } from '../../models/squares';

describe('SquareService', () => {
  let squareService: Square;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    squareService = TestBed.inject(Square);
  });

  it('should be created', () => {
    expect(squareService).toBeTruthy();
  });

  it('should return initial squares', () => {
    const squares = squareService.getSquares();
    expect(squares.length).toBe(2);
    expect(squares[0].number).toBe(1);
  });

  it('should add a square', () => {
    const newSquare: SquareI = {
      number: 3,
      type: 'Bici',
      status: 'Libre',
      parkingId: 1
    };

    squareService.addSquare(newSquare);
    const squares = squareService.getSquares();

    expect(squares.length).toBe(3);
    expect(squares.some(s => s.number === 3)).toBeTrue();
  });

  it('should update a square', () => {
    const updatedSquare: SquareI = {
      id: 1,
      number: 1,
      type: 'Carro',
      status: 'Ocupada',
      parkingId: 1
    };

    squareService.updateSquare(updatedSquare);
    const squares = squareService.getSquares();
    const square = squares.find(s => s.id === 1);

    expect(square?.status).toBe('Ocupada');
  });
});
