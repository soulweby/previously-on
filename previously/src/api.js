import axios from "axios";

let api = axios.create({
    headers: {
        'X-BetaSeries-Key': '2df01f59dc89',
        'Authorization' : 'Bearer 02c0567faad4'
    }
})

export default api;

