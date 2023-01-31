const API_PATH = '/v1/api/data'


async function callTheApi(url) {
    const token = window.entando.keycloak.token
    let init = {}
    if (token) {
        init = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    }
    return await fetch(url + API_PATH, init);
}


export default callTheApi;
