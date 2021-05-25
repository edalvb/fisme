import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  algo = [
    {
      title: "Bachiller",
      description: "Trámites a seguir para obtención del grado Bachiller",
      link: "/bachiller"
    },
    // {
    //   title: "Documentos",
    //   description: "Documentación relacionada con la FISME",
    //   link: "/documents"
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
