import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingServices } from '../LoggingService.services';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //personas: Persona[] = []; //Codigo para ir en el sentido normal 
  // NombreInput:string="";  Two binding
  // ApellidoInput:string="";                      
  
  @ViewChild("nombreInputChild") nombreInputChild:ElementRef;
  @ViewChild("apellidoInputChild") apellidoInputChild:ElementRef;

 // @Output() personaCreada = new EventEmitter<Persona>(); //Decororador de Hijo a Padre  es igual un evento emit donde se pasa el modelo
 
  constructor(private loggingServices:LoggingServices,
               private personaServices:PersonasServices) { //recibimos una instancia de nuestro servicio

  } //Servicios Angular

  ngOnInit(): void {
  }
  //Metodo para soportar el concepto de refrencia Local
  // agregar_persona(nombreInputRef:HTMLInputElement,ApellidoInputRef:HTMLInputElement){
  //   let persona1 = new Persona(nombreInputRef.value,ApellidoInputRef.value);//Referencia Local
  //   this.personaCreada.emit(persona1); // se emite del Hijo el modelo Persona
  //   //this.personas.push(persona1);//Codigo para ir en el sentido normal 
  // }
  //Metodo paar soportar el concepto de referencia Local y ViewChild + servcios
  // agregar_persona_child(){
  //   let personachild = new Persona(this.nombreInputChild.nativeElement.value,this.apellidoInputChild.nativeElement.value);//>Referencia local con ViewChild
  //   this.loggingServices.enviaMensajeConsola("Enviamos persona: " +personachild.nombre + " " + personachild.apellido);//Servicios se injectan mediante el constructor (DI Dependency Injection)
  //   this.personaCreada.emit(personachild);
  // }
  agregar_persona_child(){
    let personachild = new Persona(this.nombreInputChild.nativeElement.value,this.apellidoInputChild.nativeElement.value);//>Referencia local con ViewChild
    this.loggingServices.enviaMensajeConsola("Enviamos persona: " +personachild.nombre + " " + personachild.apellido);//Servicios se injectan mediante el constructor (DI Dependency Injection)
    //this.personaCreada.emit(personachild);
    this.personaServices.AgregarDataService(personachild)
  }

}
