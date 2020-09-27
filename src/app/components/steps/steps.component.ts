import { Component, OnInit, ViewChild } from '@angular/core'
import { MatAccordion } from '@angular/material/expansion';
import { Document } from "../../models/document";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  ctaUNTRM: string = "026-1022419";

  documents: Document[] = [
    {
      title: "Constancia",
      description: "Egresado",
      cost: 12.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "35"`,
        `Presentar "Solicitud de Constancia de Egresado" a la Facultad`
      ]
    },
    {
      title: "Constancia",
      description: "Primera matrícula",
      cost: 12.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "118"`,
        `Presentar "Solicitud de Constancia de Primera Matrícula" a la Facultad`
      ]
    },
    {
      title: "Certificado",
      description: "Estudios",
      cost: "~150.00",
      content: [
        `Pagar (1 x cda ciclo) al Banco de la Nación al "9135" con el código "8"`,
        'Solicitar a la Facultad adjuntando los vouchers.'
      ]
    },
    {
      title: "DNI",
      description: "Copia de DNI legalizado",
      content: [
        "Cuesta alrededor de S/ 5.00 en el Notario"
      ]
    },
    {
      title: "SISNOA",
      description: "Constancia No Adeudo",
      cost: 10.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "37"`,
        `Solicitar a "sisnoa.vrin@untrm.edu.pe" adjuntando el voucher.`
      ]
    },
    {
      title: "Fedatear",
      description: "Documentos",
      content: [
        "Hacer el fedateo en Secretaría General de los siguientes:",
        "Certificado de Computación",
        "Certificado de Inglés",
        "Certificado de Actividades Integradoras",
        "Resolución de Prácticas Pre Profesionales"
      ]
    },
    {
      title: "Carpeta",
      description: "Adquirir Carpeta Bachiller",
      cost: 150.00,
      content: [
        `Pagar en caja o al Banco de la Nación a la cuenta "${this.ctaUNTRM}"`,
        `En Grados y Títulos adquirir "Solicitud de bachiller"`,
        `En Grados y Títulos adquirir "Constancia"`,
        `Hacer firmar la "Constancia" a DAYRA.`
      ]
    },
    {
      title: "Presentar",
      description: "Carpeta de Bachiller",
      content: [
        `Presentar todos los requisitos a la Facultad.`
      ]
    },
    {
      title: "Constancia",
      description: "Registro de Grado",
      content: [
        `Firmar el "Libro de Grado" en la Facultad.`,
        `Llevar una foto tamaño carnet fondo blanco y con terno oscuro.`,
        `La Facultad entregará la "Constancia de Registro de Grado".`,
        `Con dicha Constancia debe ir a la Oficina de Grados y Títulos.`,
      ]
    },
    {
      title: "Caligrafiado",
      description: "Tramitar Caligrafiado",
      cost: 25,
      content: [
        `Pagar en caja o al Banco de la Nación a la cuenta "${this.ctaUNTRM}"`,
        `Solicitud de Caligrafiado`,
        `2 fotos tamaño carnet con terno oscuro, camisa blanca y fondo blanco, en material mate.`
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
