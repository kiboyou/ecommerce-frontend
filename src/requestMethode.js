import axios from "axios";



const BASE_URL= "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDQzZjgxNjQ0ZTRiNWMwZTRlOGViMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTMzNjc1NSwiZXhwIjoxNjY5NTk1OTU1fQ.KobP4BIC3QEgugb5U2oWyy9xWcncEuaajzt8K8qv5zY"



export const publicRequest = axios.create({
    baseURL : BASE_URL,

})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    hearder:{
        token:`diarra ${TOKEN}`
    }

})