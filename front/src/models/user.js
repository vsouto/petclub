export class UserModel {

  constructor() {
    this.name = ""
    this.email = ""
    this.status = ""
  }


  /**
   * Returns a serialized JSON-like object
   * @returns {Object}
   *
   */
  dump() {
    return {
      name: this.name,
      email: this.email,
      status: this.status,
    }
  }
}
