export class User {
  id:number|null;
  name: string;
  email: string;
  profileImage: string;
  description: string;
  rentedBicycles: any[];
  borrowedBicycles: any[];

  constructor(
    id:number|null,
    name: string,
    email: string,
    profileImage: string,
    description: string,
    rentedBicycles: any[],
    borrowedBicycles: any[]
  ) {
    this.id=id; 
    this.name = name;
    this.email = email;
    this.profileImage = profileImage;
    this.description = description;
    this.rentedBicycles = rentedBicycles;
    this.borrowedBicycles = borrowedBicycles;
  }
}
