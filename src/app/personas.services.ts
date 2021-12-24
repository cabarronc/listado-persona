import { Persona } from "./persona.model";

export class PersonasServices {
    personas: Persona[] = [new Persona("Carlos Alberto", "Barron Castro"),
    new Persona("Andrea", "Aguilar")
    ];
   AgregarDataService (persona: Persona) {
        this.personas.push(persona);
    }
}