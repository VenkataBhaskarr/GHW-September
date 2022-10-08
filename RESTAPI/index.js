
import express from 'express';
//body-parser is used to handle the incoming requests to the server in oprder to parse them and would acts like a middle ware 
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'
const app = express();
const PORT = 5001
 
// app.use() function is used instantiate the middle ware to a specific route if its mentioned or to each of the routes if we doenst mention any.
//app.use(bodyParser.json()) basically tells the system that you want json to be used
app.use(bodyParser.json())
app.use('/', usersRoutes)//middleware
// app.get('/' , (req,res) => {
//     console.log("hey there")
//     res.send("201 successful");
// })
app.listen(PORT, () => console.log("up and running hell ddfdo"))
