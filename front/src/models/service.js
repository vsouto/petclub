export class ServiceModel {

  constructor() {
    this.title = ""
    this.discount = ""
    this.product = ""
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
      discount: this.discount,
      product: this.product,
      status: this.status,
    }
  }
}
