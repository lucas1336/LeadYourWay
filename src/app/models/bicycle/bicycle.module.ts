export interface BicycleModule {
  id: number;
  model: string;
  description: string;
  image: string;
  pricePerHour: number;
  price: number;
  available: boolean;
  averageRating: number;
  userId: number;
}
