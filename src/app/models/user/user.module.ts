export class UserModule {
  name: string;
  email: string;
  profileImage: string;
  description: string;
  rentedBicycles: any[];
  borrowedBicycles: any[];

  constructor(
    name: string,
    email: string,
    profileImage: string,
    description: string,
    rentedBicycles: any[],
    borrowedBicycles: any[]
  ) {
    this.name = name;
    this.email = email;
    this.profileImage = profileImage;
    this.description = description;
    this.rentedBicycles = rentedBicycles;
    this.borrowedBicycles = borrowedBicycles;
  }
}
