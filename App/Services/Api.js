import apisauce from 'apisauce'

const create = (baseURL = 'https://jsonplaceholder.typicode.com/photos') => {

    const api = apisauce.create({
        baseURL,
        timeout: 120000
    })

    const getCocktails = () => api.get()

    return {
        getCocktails,
    }
}

export default {
    create
}