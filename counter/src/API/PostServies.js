import axios from "axios";

export default class PostServies {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
