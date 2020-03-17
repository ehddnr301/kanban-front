import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const kanbanApi = {
  getCards: () => api.get("kanban/cards"),
  postCard: req => api.post("kanban/cards", req),
  putCard: id => api.put(`kanban/cards/${id}`),
  deleteCard: id => api.delete(`kanban/cards/${id}`)
};
