import { BicycleModule } from '../bicycle/bicycle.module';

export interface UserModule {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userPhone: string;
  userBirthDate: Date;
  bicycles: BicycleModule[];
}
