/** Arquivo JavaScript que contém a importação da biblioteca Axios, fazendo a integração com a API
 * hospedada no heroku.
 */

import axios from "axios";

export const baseURL = "https://pettrip-tcs.herokuapp.com";

const api = axios.create({ baseURL });

export default api;
