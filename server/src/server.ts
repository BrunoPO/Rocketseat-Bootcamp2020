import express from 'express';

const app = express();

app.use(express.json())

//Route Params: Identified on the route (like the id)
//Query Params: Identified on the query like pagination

app.post('/users/:id', (request, response) => {
    console.table({"params": request.params.id, "query": request.query.page});
    var users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21 }
    ]
    return response.json(users);
});

app.listen(3333);
console.log("http://localhost:3333/users/");
