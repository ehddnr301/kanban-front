import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "x-api-key": "B83O3pRsEn1qkjAafrjDM4XQEN054isA6MqLLmYN"
  }
});

export const kanbanApi = {
  getCards: () => api.get("kanban/cards"),
  postCard: req => api.post("kanban/cards", req),
  putCard: req => api.put(`kanban/cards/${req.id}`, req),
  deleteCard: id => api.delete(`kanban/cards/${id}`)
};
