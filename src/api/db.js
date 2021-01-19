import axios from "axios";

const db= axios.create({
    baseURL:"http://localhost:5000/api"
});

const access_token=localStorage.getItem("token");
db.defaults.headers.post['Authorization'] = `Bearer: ${access_token}`
db.defaults.headers.get['Authorization'] = `Bearer: ${access_token}`
export default db;
