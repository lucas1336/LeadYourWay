export interface BicycleModule {
  id: number;
  model: string;
  description: string;
  image: string;
  pricePerHour: number;
  available: boolean;
  averageRating: number;
  userId: number;
}
