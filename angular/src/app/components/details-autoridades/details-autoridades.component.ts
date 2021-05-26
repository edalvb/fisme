import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-autoridades',
  templateUrl: './details-autoridades.component.html',
  styleUrls: ['./details-autoridades.component.css']
})
export class DetailsAutoridadesComponent implements OnInit {

  @Input() autoridad;

  constructor() { }

  ngOnInit(): void {
  }

}
