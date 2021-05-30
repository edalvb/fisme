import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autoridades',
  templateUrl: './autoridades.component.html',
  styleUrls: ['./autoridades.component.css']
})
export class AutoridadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  autoridades = [
    {
      "nombre": "Roberto Carlos Santa Cruz Acosta",
      "cargo": "Director de Escuela",
      "url": "http://fisme.untrm.edu.pe/centpro/images/equipo-santacruz.jpg"
    },
    {
      "nombre": "Italo Maldonado Ramirez",
      "cargo": "Decano",
      "url": "https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=37923&ruta=/documents/docInvestigadores/37923/imagenes/foto%20italo.jpg&content_type=image/jpeg"
    },
    {
      "nombre": "Carlos Luis Lobaton Arenas",
      "cargo": "Director de Escuela",
      "url": "https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=33332&ruta=/documents/docInvestigadores/33332/imagenes/FOTOCLLA.jpg&content_type=image/jpeg"
    },
  ]

  topEmployee = {
    name: 'Italo Maldonado Ramirez',
    designation: 'Decano',
    img: "../assets/img/italo.png",
    // img: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=37923&ruta=/documents/docInvestigadores/37923/imagenes/foto%20italo.jpg&content_type=image/jpeg",
    subordinates: [
      {
        name: 'Roberto Carlos Santa Cruz Acosta',
        designation: 'Director de Escuela',
        img: "../assets/img/santa.png",
        // img: "http://fisme.untrm.edu.pe/centpro/images/equipo-santacruz.jpg",
        subordinates: []
      },
      {
        name: 'Carlos Luis Lobaton Arenas',
        designation: 'Director de Departamento',
        img: "../assets/img/lobaton.png",
        // img: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=33332&ruta=/documents/docInvestigadores/33332/imagenes/FOTOCLLA.jpg&content_type=image/jpeg",
        subordinates: []
      }
    ]
  };

}
