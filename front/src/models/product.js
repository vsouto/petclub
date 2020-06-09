export class ProductModel {

  constructor() {
    this.title = ""
    this.price = ""
    this.status = ""
  }


  /**
   * Returns a serialized JSON-like object
   * @returns {Object}
   *
   */
  dump() {
    return {
      title: this.title,
      price: this.price,
      status: this.status,
    }
  }
}
