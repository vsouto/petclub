export class AnimalModel {

  constructor() {
    this.name = ""
    this.race = ""
    this.type = ""
  }

  /**
   * Returns a serialized JSON-like object
   * @returns {Object}
   *
   */
  dump() {
    return {
      name: this.name,
      race: this.race,
      type: this.type,
    }
  }
}
