import api from './baseUrl'

export default async () => {
    try {
        const response = await api({
            url: '/products'
        })
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}