import { Injectable } from '@angular/core';
import { Tile } from 'src/app/tile/tile.model';

@Injectable()
export class MedicineService {
   public tile: Tile | undefined;
   constructor() { }
}