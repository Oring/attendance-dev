import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

import { KoreaAll } from '../../app-class';

@Component({
  selector: 'app-korea-all',
  templateUrl: './korea-all.component.html',
  styles: []
})
export class KoreaAllComponent implements OnInit {

  people: KoreaAll[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getKorea();
  }

  getKorea(): void {
    this.appService.getKorea().subscribe(people => this.people = people);
  }

}
