import  express from "express";
const app = express();
const PORT = 3000;
const task = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: true },
    { id: 4, name: "Task 4", completed: false },
    
]

app.get( "/" , (req ,res ) =>{
    res.send(task)

});
app.post( "/" , (req ,res ) =>{
    res.send("todo   post")

});
app.put( "/" , (req ,res ) =>{
    res.send("todo   put")

});
app.delete( "/" , (req ,res ) =>{
    res.send("todo   delete")

});
app.listen(PORT , ()=>{
    console.log( "server" , PORT)

} )