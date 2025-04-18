import axios from "axios";

// api key gibi uniq değerler ile proje geliştirirken bu değerleri gerekli şekilde muhafaza
// etmezsek herkes buna erişebilir bunu ise env dpsyasında tanımlayarak yaparız

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
  },
});

export default api;
