require("dotenv").config();
const express = require("express");
const db = require("./app/node-mysql-server/db-con");
const app = express();
const cors = require("cors");
const { hash } = require("bcrypt");

const corsOptions = {
  origin: "http://localhost:3000", // Only allow requests from this origin
  //methods: ["GET", "POST"], // Allow only specified methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only specified headers
  credentials: true, // Enable sending cookies and authorization headers
};
app.use(cors(corsOptions));

// const { GenericResponse, ResponseStatus } = require("./GenericResponse");
// const ErrorMessage = require("./ErrorMessage");
const swaggerui = require("swagger-ui-express");
const swaggerDocument = require("./app/SwaggerSpecs/swagger.json");
// const  swaggerJsDoc= require("swagger-jsdoc");

// const authRouter = require("./app/routes/auth");
// app.use("/",authRouter)

const routePath = require("./app/controllers/routes/auth");
app.use(express.json());

// !  FOR CREATE
app.use("/user/create", routePath);
// !  FOR LOGIN
app.use("/user/login", routePath);
// !  FOR AUTH
app.use("/", routePath);
// !  FOR RESET PASS
app.use("/user/reset", routePath);

// !  FOR CLEAR ALL THE ENTRIES(FOR CHECKING)
app.use("/user/clear", require("./app/routes/path"));
// /auth--
// const options = {
//   definition:{
//     openapi:"3.0.0",
//     info:{b
//       title:"Attendance API",
//       Version: "1.0.0",
//       description:"To Manage the Employee attendance."
//     },
//     servers:[
//       {
//         url: "http://localhost:8000"
//       }
//     ],
//   },
//   apis:["./routes/*.js"]
// }
// const specs = swaggerJsDoc(options)

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
// *  IN THIS LINE CORS IS USED TO PASS THE DATA TO REACT

// *  THIS IS IMPORTANT ONE FOR API CATCH

// !  FETCH ALL
app.get("/user/fetch", (req, res) => {
  const sql = "SELECT * FROM appuser";
  db.query(sql, (err, data) => {
    if (err) return res.json({ error: err.message });
    return res.json(data);
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
