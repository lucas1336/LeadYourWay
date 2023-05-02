import { Component } from '@angular/core';
import { User } from 'src/app/models/profile-model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  user!: User;
  
  selectedDate!: Date;
  constructor() {}
  
  ngOnInit(): void {
    this.user = new User("John Doe", "john.doe@example.com", "/assets/images/usuario 1.png","description...");
    
  }
  longText = `Bicicleta montañera de aro 27.5" de la marca Gotek, ideal para movilizarte a cualquier lugar que desees en tu día a día.`;

  longText2=`Al aprovechar las ventajas de ajuste y conduccion para cada ciclista con su tamano de rueda ideal, y con una suspension optimizada gracias a nuestro Rx Tune especifico segun talla.`
  longText3=`Equipamos a la P.Series P.3 con los mejores componentes que pudimos encontrar, como una horquilla de suspensión Manitou Circus Sport con todos los adornos: resorte firme, amortiguación FFD y amortiguación de rebote TPC, para mantener tus despegues ajustados y tus aterrizajes más suaves.`

}

