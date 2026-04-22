import axios from "axios";
//Mis asi on axios?
//lihtsustab HTTP päringuid, pakub paremat süntaksit
//veakäsitlus on olemas

const API = "http://localhost:5173/api/items";
export const fetchItems = () => axios.get(API);
export const createItems = (name: string) => axios.post(API, {name});
export const deleteItem = (id: number) => axios.delete(`${API}/${id}`);