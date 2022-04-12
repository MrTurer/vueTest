import axios from "axios";

export default {
  search: function (route, request) {
    return axios.get('/api/nsi/' + route + '/search', { params: request })
  },
  find: function (route, id) {
    return axios.get('/api/nsi/' + route + '/find/?id=' + id);
  },
  getTnvedByIds(request) {
    return axios.get('/api/nsi/nsitnved/listbyids', { params: request });
  }
}