import { Component, OnInit, ViewChild } from '@angular/core'
import { MatAccordion } from '@angular/material/expansion';;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  documents: Document[] = [
    {
      name: "Constancia de Egresado",
      cost: 12,
      icon: "account_circle"
    },
    {
      name: "Constancia de primera matrícula",
      cost: 12,
      icon: "account_circle"
    },
    {
      name: "Certificado de Estudios",
      cost: 150,
      icon: "account_circle"
    },
    {
      name: "Copia de DNI legalizado por Notario",
      icon: "account_circle"
    },
    {
      name: "Constancia de No Adeudo",
      cost: 10,
      description: [
        "Adquirir en la oficina del SISNOA"
      ],
      icon: "account_circle"
    },
    {
      name: "Adjuntar Documentos Legalizados",
      description: [
        "Certificado de Computación",
        "Certificado de Inglés",
        "Certificado de Actividades Integradoras",
        "Resolución de Prácticas Pre Profesionales"
      ],
      icon: "account_circle"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Document {
  name: string,
  cost?: number,
  description?: string[],
  icon?: string
}
