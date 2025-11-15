import http from "../lib/http.js";

const unwrap = (p) => p.then((r) => r.data);

const api = {
  get: (url, config) => unwrap(http.get(url, config)),
  post: (url, data, config) => unwrap(http.post(url, data, config)),
  put: (url, data, config) => unwrap(http.put(url, data, config)),
  patch: (url, data, config) => unwrap(http.patch(url, data, config)),
  delete: (url, config) => unwrap(http.delete(url, config)),
};

export default api;
