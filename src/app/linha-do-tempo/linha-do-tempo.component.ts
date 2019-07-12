import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  constructor() { }
  produtos_pra_venda = produtos;

  ngOnInit() {
  }

}