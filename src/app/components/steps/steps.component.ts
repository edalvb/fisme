import { Component, OnInit, ViewChild } from '@angular/core'
import { MatAccordion } from '@angular/material/expansion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Document } from "../../models/document";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ctaUNTRM: string = "026-1022419";

  documents: Document[] = [
    {
      title: "Constancia de Esgresado",
      description: "Egresado",
      cost: 12.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "35"`,
        `Presentar "Solicitud de Constancia de Egresado" a la Facultad`
      ]
    },
    {
      title: "Constancia de Primera matrícula",
      description: "Primera matrícula",
      cost: 12.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "118"`,
        `Presentar "Solicitud de Constancia de Primera Matrícula" a la Facultad`
      ]
    },
    {
      title: "Certificado de Estudios",
      description: "Estudios",
      cost: "~150.00",
      content: [
        `Pagar (1 x cda ciclo) al Banco de la Nación al "9135" con el código "8"`,
        'Solicitar a la Facultad adjuntando los vouchers.'
      ]
    },
    {
      title: "Copia de DNI Legalizado",
      description: "Copia de DNI legalizado",
      cost: "~5.00",
      content: [
        "Legalízalo en el Notario"
      ]
    },
    {
      title: "Constancia No Adeudo",
      description: "Constancia No Adeudo",
      cost: 10.00,
      content: [
        `Pagar al Banco de la Nación al "9135" con el código "37"`,
        `Solicitar a "sisnoa.vrin@untrm.edu.pe" adjuntando el voucher.`
      ]
    },
    {
      title: "Fedateo de Documentos en Secretaría General",
      description: "Documentos",
      content: [
        "Fedateo de Certificado de Computación",
        "Fedateo de Certificado de Inglés",
        "Fedateo de Certificado de Actividades Integradoras",
        "Fedateo de Resolución de Prácticas Pre Profesionales"
      ]
    },
    {
      title: "Adquirir Carpeta Bachiller",
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
      title: "Presentar Carpeta de Bachiller",
      description: "Carpeta de Bachiller",
      content: [
        `Presentar todos los requisitos a la Facultad.`
      ]
    },
    {
      title: "Constancia de Registro de Grado",
      description: "Registro de Grado",
      content: [
        `Firmar el "Libro de Grado" en la Facultad.`,
        `Llevar una foto tamaño carnet fondo blanco y con terno oscuro.`,
        `La Facultad entregará la "Constancia de Registro de Grado".`,
        `Con dicha Constancia debe ir a la Oficina de Grados y Títulos.`,
      ]
    },
    {
      title: "Tramitar Caligrafiado",
      description: "Tramitar Caligrafiado",
      cost: 25,
      content: [
        `Pagar en caja o al Banco de la Nación a la cuenta "${this.ctaUNTRM}"`,
        `Solicitud de Caligrafiado`,
        `2 fotos tamaño carnet con terno oscuro, camisa blanca y fondo blanco, en material mate.`
      ]
    }
  ];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
