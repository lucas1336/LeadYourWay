export class User {
  name: string;
  email: string;
  profileImage: string;
  description: string;

  constructor(name: string, email: string, profileImage: string, description: string) {
    this.name = name;
    this.email = email;
    this.profileImage = profileImage;
    this.description = description;
  }
}
