import axios from "axios";
import { IUserData } from "../Interfaces/userInterfaces";

const API = 'http://localhost:3001'

export const registerRequest = (user: IUserData) => axios.post(`${API}/register`, user)

