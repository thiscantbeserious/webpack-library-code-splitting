import * as utils from "./utils";

export class BaseModel {
  constructor() {
    this._typeName = Object.getPrototypeOf(this).constructor.name;
  }
  clone() {
    let copy = Object.create(this.constructor.prototype);
    utils.copyProperties(copy, this, raw);
  }
}
