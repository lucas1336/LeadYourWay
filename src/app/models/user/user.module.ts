import { BicycleModule } from '../bicycle/bicycle.module';

export interface UserModule {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: Date;
  bicycles: BicycleModule[];
}
