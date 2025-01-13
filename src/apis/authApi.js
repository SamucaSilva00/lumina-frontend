import requestHandler from './requestHandler'

const baseUrl = '/auth'

const authApi = async (authType, credentials) => {
    const [response, error] = await requestHandler(`${baseUrl}/${authType}`, 'POST', credentials)
    console.log(response, 'RRRRRRRRRRRRRR')
    if (error || !response) {
        console.log(response, "fffffffffffff")
        return error;
    }
    console.log(response, "TTTTTTTTTTT")
    return response;
}

export default authApi