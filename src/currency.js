export default class CurrencyConverter {
  static async convert() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/4b893e55c028ab4287796be3/latest/USD`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
