import apisauce from 'apisauce'

const createHome = (baseURL = 'https://jsonplaceholder.typicode.com/photos') => {

    const api = apisauce.create({
        baseURL,
        timeout: 120000
    })

    const getCocktails = () => api.get()

    return {
        getCocktails,
    }
}

const createPost = (baseURL = 'https://jsonplaceholder.typicode.com/posts') => {

    const api = apisauce.create({
        baseURL,
        timeout: 120000
    })

    const getPosts = () => api.get()

    return {
        getPosts,
    }
}

export default {
    createHome,
    createPost
}