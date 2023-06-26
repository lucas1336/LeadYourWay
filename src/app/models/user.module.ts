import { BicycleModule } from 'src/app/models/bicycle.module';
import { CardModule } from 'src/app/models/card.module';

export interface UserModule {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userPhone: string;
  imageData: string;
  userBirthDate: string;
  bicycles: BicycleModule[];
  cards: CardModule[];
}
