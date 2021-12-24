import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoggingServices } from './LoggingService.services';
import { Persona } from './persona.model';
import { PersonasServices } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'listado de persona';
  // personas: Persona[] = [new Persona("Carlos Alberto","Barron Castro")
  //                       ];
  personas: Persona[] = [];

  constructor(private loggingService:LoggingServices,
               private personasservices:PersonasServices){

  }
  ngOnInit(): void {
    this.personas = this.personasservices.personas;
   
  }
  // personaAgregada(persona: Persona){
  //   // this.loggingService.enviaMensajeConsola("agregamos la nueva" +persona.nombre); //Service
  //   // this.personas.push(persona);
  //   this.personasservices.AgregarDataService(persona);
  // }
}
