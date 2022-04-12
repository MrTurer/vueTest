import axios from "axios";

export default {
  downloadFile(url, filename, params) {
    var options = { responseType: 'blob'};
    if (params) {
      options.params = params;
    }
    return axios.get(url, options)
      .then(response => {
        const blob = new Blob([response.data], { type: response.data.type });
        const link = document.createElement('a');
        const contentDisposition = response.headers['content-disposition'];
        filename = filename || 'download';
        if (contentDisposition) {
          const matches = contentDisposition.match(/filename=([\w\d\-_.]+)/);
          if (matches?.length === 2) {
            filename = matches[1];
          }
        }
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      });
  }
}