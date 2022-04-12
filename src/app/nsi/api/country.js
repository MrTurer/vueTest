import { authAxios } from '@/common/axios'

export default {
  search: function (request) {
    return authAxios.get('/api/country/search', { params: request })
  },
  find: function (id) {
    return authAxios.get(`/api/country/${id}`);
  }
}