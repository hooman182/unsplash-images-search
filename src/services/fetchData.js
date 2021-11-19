import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID YPoo9no8tT6YquPzkE8NEb4wZXMutHioEOTOLKatOOA'
    },
})