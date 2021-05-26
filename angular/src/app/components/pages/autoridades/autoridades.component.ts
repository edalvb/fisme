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

}
