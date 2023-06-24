import { BicycleModule } from 'src/app/models/bicycle-model.model';
import { CardModule } from 'src/app/models/card.module';

export interface UserModule {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
  userBirthDate: Date;
  imageData: string;
  bicycles: BicycleModule[];
  cards: CardModule[];
}
