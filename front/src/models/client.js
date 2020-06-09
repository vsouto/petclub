export class ClientModel {

  constructor() {
    this.title = ""
    this.email = ""
    this.animal = ""
  }

  /**
   * Returns a serialized JSON-like object
   * @returns {Object}
   *
   */
  dump() {
    return {
      title: this.title,
      email: this.email,
      animal: this.animal,
    }
  }
}
