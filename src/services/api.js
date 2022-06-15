/** Arquivo JavaScript que contém a importação da biblioteca Axios, fazendo a integração com a API
 * hospedada no heroku.
 */

import axios from "axios";

const api = axios.create({
  baseURL: "https://pettrip-tcs.herokuapp.com",
});

export default api;
