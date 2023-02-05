export const sendRequest = async (_method, _url, _token, _body = {}) => {
    let request = {
        method: _method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${_token}`
        }
    }
    if (JSON.stringify(_body) != "{}") request.body = JSON.stringify(_body);
    return await fetch(_url, request).then(response => response.json());
}