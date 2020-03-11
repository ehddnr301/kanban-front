import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const kanbanApi = {
  getCards: () => api.get("kanban/cards")
  // postCard: ()=> api.post("kanban/cards")
};
