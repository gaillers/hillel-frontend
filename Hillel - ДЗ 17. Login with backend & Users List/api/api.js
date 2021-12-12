const api = (() => {
  const API_URL = 'https://reqres.in/api';

  class API {
    constructor() {
      this._xhr = new XMLHttpRequest();
    }

    login(email, password, responseCb) {
      this._xhr.open('POST', `${API_URL}/login`);
      this._xhr.setRequestHeader('content-type', 'application/json');
      this._xhr.send(
        JSON.stringify({
          email,
          password,
        })
      );

      this._xhr.onload = (e) => {
        const response = JSON.parse(e.currentTarget.responseText);
        responseCb && responseCb(response);

      };
    }

    getUsers = (page = 1, callback) => {
      this._xhr.open('GET', `${API_URL}/users?page=${page}`, true);
      this._xhr.send();

      this._xhr.onload = (e) => {
        const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
        callback && callback(data, total_pages);
      };
    };
  }

  return new API();
   
})();

