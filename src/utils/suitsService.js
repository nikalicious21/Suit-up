import tokenService from './tokenService';
const BASE_URL = '/api/suits/';

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(suit) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(suit)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

