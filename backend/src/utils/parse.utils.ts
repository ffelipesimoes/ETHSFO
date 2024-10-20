export default class ParseUtils {
  static toString(value: any): string {
    if (!value) return null;
    return String(value);
  }

  static toNumber(value: any): number {
    if (!value) return null;
    let returnValue = Number(value);
    if (isNaN(returnValue)) {
      returnValue = Number(String(value).replace(/[^\d,.]+/g, ''));
    }
    return returnValue;
  }
}
