

export class User {
  firstName = '';
  lastName = '';
  age = 36;

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
