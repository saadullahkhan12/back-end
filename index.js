import  express from "express";
import  morgan from "morgan";
const app = express();
const PORT = 3000;
const task = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: true },
    { id: 4, name: "Task 5", completed: false },
    
]
app.use(morgan('tiny'));
function middleware(req,res,next) {
    console.log("Middleware executed");
    next();


}
app.use(middleware);
app.get( "/" , (req  ,res ) =>{
    res.send(task)

});
app.post( "/" , (req ,res ) =>{
    res.send("todo saad  post")

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