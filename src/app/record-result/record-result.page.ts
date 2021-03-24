import { Component, OnInit } from '@angular/core';
import { TcaFlipCoinsService } from '../tca-flip-coins.service';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.page.html',
  styleUrls: ['./record-result.page.scss'],
})
export class RecordResultPage implements OnInit {

  constructor(
    public sharedDataService: TcaFlipCoinsService
  ) { }

  ngOnInit() {
  }

}
