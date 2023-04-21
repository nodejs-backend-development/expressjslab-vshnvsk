const { getRequest, postRequest } = require('../clients/httpClient');

const getTodos = async (req, res) => {
    const userId = req.params.user_id;
    console.log(`https://gorest.co.in/public/v2/users/${userId}/todos`);
    const data = await getRequest(`https://gorest.co.in/public/v2/users/${userId}/todos`);
    console.log(data);
    res.status(200).json(data);
};

const postTodos = async (req, res) => {
    const userId = req.params.user_id;
    const newTodos = req.body;
    console.log(`https://gorest.co.in/public/v2/users/${userId}/todos`);
    console.log(newTodos);

    if (Object.keys(newTodos).length === 0) {
        res.status(400).send({});
    } else {
        const newData = await postRequest(
            `https://gorest.co.in/public/v2/users/${userId}/todos`,
            'POST',
            newTodos,
        );
        res.status(201).json(newData);
    }
};

module.exports = {
    getTodos,
    postTodos,
};
