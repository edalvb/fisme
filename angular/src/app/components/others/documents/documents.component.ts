import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  selected = 'Cronograma Matricula Extemporánea 2020-2.pdf';
  path = "https://edalvb.github.io/fisme/assets/documents/";
  nameDoc = "Cronograma Matricula Extemporánea 2020-2.pdf";
  o_size = false;

  pdfSrc = `${this.path}${this.nameDoc}`;

  documents = [
    {
      id: "1",
      title: "Cronograma Matricula Extemporánea 2020-2",
      link: "Cronograma Matricula Extemporánea 2020-2.pdf"
    },
    {
      id: "2",
      title: "Pagos por diversos conceptos año 2020",
      link: "Pagos por diversos conceptos año 2020.pdf"
    },
    {
      id: "3",
      title: "Reglamento de practicas pre profesionales-aprobado 27 abril 2020",
      link: "Reglamento de practicas pre profesionales-aprobado 27 abril 2020.pdf"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 600) {
      this.o_size = true;
    }
  }

}
