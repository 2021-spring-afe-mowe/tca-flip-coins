import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcaFlipCoinsService {

  constructor() { }

  gameResult = [
    "W"
    ,"L"
  ];
}
