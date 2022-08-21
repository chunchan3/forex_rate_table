import axios from "axios";

export default axios.create({
    baseURL:`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_FIXER_KEY}`
})