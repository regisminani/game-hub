import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "6d44e484916b43bc862a299458352d05"
    }
})