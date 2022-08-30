import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  @Output() idioma: EventEmitter<any> = new EventEmitter();

  constructor() { }

}