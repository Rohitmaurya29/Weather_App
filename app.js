const express= require("express");
const path = require('path');
const app= express();
const body= require("body-parser");//to get the html file data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const object=[{id:1,fname:"Rohit", lname:"Maurya"},{id:2, fname:"Sumit", lname:"Kumar"},{id:3, fname:"Nitil", lname:"Prajapati"}];
// // to create the server
// let name="abc";
// let pass= "def";
// const middle=("/",(req,res,next)=>{
//     if(name === "abc" && pass==="def"){
//         console.log("Middleware is working");
//         next();
//     }else{
//         res.send("Error");
//     }
    
// })

app.post("/",(req,res)=>{
    const n1= Number(req.body.num1);
    const n2 = Number(req.body.num2);
    console.log(n1+n2);
})

app.get("/",(req,res)=>{
    res.send(object);
})

app.post("/post2",(req,res)=>{
    const y= req.body;
    object.push(y);
    res.send(y);
})

// app.get("/",(req,res)=>{
// res.send("welcome");
// })

// app.delete("/post/:id",(req,res)=>{
//     const {id} = req.params;
//     myArray = object.findIndex(y=>y.id==id);
//     if(myArray!== -1){
//     object.splice(myArray, 1);
//     res.send(myArray);
//     }
//     // console.log(myArray);
// });

app.delete('/post/:id', (req, res)=>{
    const {id} = req.params;
    const employee = object.findIndex(e => e.id==id);
    //TODO delete this employee from list;
    if (employee !== -1) {
        // Remove the employee from the array using splice
        object.splice(employee, 1);
        res.send("Employee deleted");
    } 
    //res.send("Employee deleted");
    
});

app.delete('/:id', (req, res) => {
    let index = object.findIndex(item => item.id === req.query.id);
    object.splice(index, 1);
    res.sendStatus(200);
   });

   app.get("/html",(req,res)=>{
    const x= (__dirname)+"/exp2.html"
    res.sendFile(x);
   })

// app.delete("/dlt/:id",(req,res)=>{
//     const {id}=req.params
//     x =object.filter(({id})=> id !==req.params.id)
//     res.send(x);
// });

// app.delete("/dlt1",(req,res)=>{
//     let index= object.findIndex(item => item.id=== req.query.id);
//     object.splice(index, 1);
//     res.sendStatus(2000);
// })

// app.delete("/",(req,res)=>{
//     let index= object.findIndex(item=>item.id===req.query.id);
//     object.splice(index,1);
//     res.sendStatus(2000);
// })

// app.put("/",(req,res)=>{
//     res.send("welocome to the put function")
// })

// app.put("/put/:id",(req,res)=>{
//     const {id} = req.params;
//     const {name} = req.body;
//     const find= object.find(y=>y.id==id);
//     find.fname=name;
//     res.send(id);
// });

app.put("/pt1",(req,res)=>{
    const{fname}=req.query;
    const {bdy} = req.body;
    const find= object.find(y=>y.fname==fname);
    find.id=bdy;
    res.send(find.id);
});

app.put("/p2",(req,res)=>{
    const {fname}= req.query;
    const {bdy} = req.body;
    const find= object.find(y=> y.fname==fname);
    find.id=bdy;
    res.send(find);
})
// app.use(middle);

// app.get("/user",(req,res)=>{
//     res.send("Got the response");
// })

// app.get("/client",(req,res)=>{
//     res.send("Done from this side");
// })

// app.get("/first",(req,res)=>{
//     res.send("First Text");
// })



app.get('/post', (req, res)=>{
    res.send(object);
    console.log(object);
});

// //  by id
// app.get('/table/:id', (req, res)=>{
//     const { id } = req.params;
//     const employee = object.find(e => e.id==id)
//     console.log(employee);
//     res.send(employee);
// });

// // by Query
// app.get("/query",(req,res)=>{
//     const {name}= req.query;
//     const x= object.find(y=>y.fname==name)
//     res.send(x);
// })

// app.get("/last",(req,res)=>{
//     const {last}= req.query;
//     const z= object.find(y=>y.lname==last)
//     res.send(z);
// })

// // app.get("/table/:id",(req,res)=>{
// //     const {id}=1;
// //     const search=object.find(y=>y.id==id)
// //     console.log(search);
// //     res.send(search);
// // })

// app.get("/tab",(req,res)=>{
//     const {name}=req.query;
//     const x= object.find(y=>y.lname==name)
//     res.send(x);
// });

// app.get("/get",(req,res)=>{
//     res.send(object);
// });

// app.post("/",(req,res)=>{
//     res.send("Hello World");
// })

// app.post("/post",(req,res)=>{
//     const x=req.body
//     object.push(x)
//     res.send(x);
//     console.log(x);
// })
 app.post("/post",(req,res)=>{
    const x= req.body;
    object.push(x);
    res.send(x);
 });
// app.post('/post', (req, res)=>{
//     const data = req.body;
//     object.push(data);
//     res.send(data);
//     console.log(data)
// });

// app.post("/postman",(req,res)=>{
//     const x= req.body;
//     object.push(x);
//     res.send(x);
// })


// to define the port number of server
    // app.listen(4000,()=>{
    //     console.log("Server Created");
    // })

// to export the data in www file
module.exports=app;
