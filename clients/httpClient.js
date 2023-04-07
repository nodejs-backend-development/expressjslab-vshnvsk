const getRequest = async(url) => {
    return await fetch(url, {
        headers: {
            "Authorization": '1bf47289887ecb9910288dba04bcf3352065ed6801201523f07aa20da3ece03d'
        },
    }).then(response => response.json());
}

async function postRequest(url = "", method, data = {}){
    const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            'Authorization': '1bf47289887ecb9910288dba04bcf3352065ed6801201523f07aa20da3ece03d'
        }
    });
    return response.json();
}

module.exports = {
    getRequest,
    postRequest
}