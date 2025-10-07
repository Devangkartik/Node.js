const express = require('express')
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 5000;

//Create routes fpor show all user list make hybrid server

app.get('/users', (req, res)=>{
    res.json(users);
})

app.get('/api/users', (req,res)=>{
    const html =`<ul>
    ${users.map((user)=>{
        return `<li>${user.first_name}  ${user.last_name}</li>`
    }).join('')}
    </ul>`;
    res.send(html)
})


// get particular user via id 

app.get('/api/users/:id', (req,res)=>{
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId)

    res.json(user);
})

// create a new user

app.post("/api/users", (req,res)=>{
    res.send('newe users is created successfully')
})

// update user with particular id 

// app.patch('/api/users/:id', (req,res)=>{
//       res.send('user is updated successfully' +req.params.id)
// })

// app.delete("/api/users/:id", (req,res)=>{
//     res.send('user is deleted successfully', +req.params.id)
// })

//create a unuiversel path which is work for same route with diffrent type request methode 

app.route('/api/users/:id').get().patch().delete();



app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})