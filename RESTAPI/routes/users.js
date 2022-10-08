import express from 'express'
import {v4 as uuidv4} from 'uuid';
const router = express.Router()
const users = [
    { name: "bhaskar",
      age : 28
}
]
router.get('/users', (req,res) => {
   res.send((users))
});
router.post('/users', (req,res) => {
    const user = { ...req.body , 'id':uuidv4()}
    users.push(user)
    res.send("bhaskar")
})
router.get('/users/:id', (req,res) => {
     res.send(req.params.id)
    // res.send("edavani nenu")
})

export default router