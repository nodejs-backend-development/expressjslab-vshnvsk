const {getRequest, postRequest} = require('../clients/httpClient.js');

const getTodos = async (req, res) => {
    const userId = req.params.id;
    console.log(`https://gorest.co.in/public/users/${userId}/todos`);
    const data = await getRequest(`https://gorest.co.in/public/users/${userId}/todos`)
    console.log(data);
    res.status(200).json(data);
};

const postTodos = async (req, res) => {
    const userId = req.params.userId;
    const data = req.body;
    console.log(`https://gorest.co.in/public/users/${userId}/todos`);
    console.log(data);
    
    if(Object.keys(data) === 0){
        res.status(400).send({});
    } else{
        const newData = await postRequest(`https://gorest.co.in/public/users/${userId}/todos`, 'POST', data);
        res.status(201).json(newData);
    }
}

module.exports = {
    getTodos,
    postTodos
}