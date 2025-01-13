export const baseRequest = (
    requestInfo,
    method = 'GET',
    bodyData = undefined,
    extra = undefined,
) => {
    let baseUri = "http://localhost:7000"

    const endpoint =
        typeof requestInfo === 'object' ? requestInfo.url : requestInfo

    let headers = {
        Accept: 'application/json',
    }

    if (extra && !extra['_noHeaders']) {
        headers = {
            ...headers,
            'Content-Type': 'application/json',
            ...(extra && extra.headers ? extra.headers : {})
        }
    }

    const init = {
        headers,
        method,
        credentials: 'include',
    }

    if (bodyData) {
        if (headers['Content-Type'] === 'application/json') {
            init.body = JSON.stringify(bodyData)
        } else {
            init.body = bodyData
        }
    }

    const finalUrl = new URL(typeof requestInfo === 'string' && requestInfo.startsWith('/') ? `${baseUri}${endpoint}` : endpoint)

    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(finalUrl, init));
        } catch (error) {
            // fetch will only reject in network errors
            reject(new Error('NetworkError ' + error.message));
        }
    });
}

const requestHandler = async (endpoint, method = 'GET', data = undefined, extra = {}) => {
    let response = {};
    try {
        response = await baseRequest(endpoint, method, data, extra);

        if (response.status === 401) {
            document.dispatchEvent(new Event('unauthenticated'));
        }

        if (response.status === 204) {
            return [{ success: true }, null];
        }

        const decodedResponse = await response.json();

        if (!response.ok || !decodedResponse.success) {
            throw new Error(decodedResponse.message);
        }

        return [decodedResponse, null];
    } catch (error) {
        const networkError = error?.message?.startsWith('NetworkError')
            ? { endpoint, method }
            : null;

        return [null, { message: error?.message, status: response.status, networkError }];
    }
};

export default requestHandler