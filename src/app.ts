import express from "express";
import compression from "compression";  // compresses requests
import lusca from "lusca";
// import MongoStore from "connect-mongo";
// import mongoose from "mongoose";
// import bluebird from "bluebird";
// import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

// Controllers (route handlers)
import * as apiController from "./controllers/api";


// Create Express server
const app = express();

// Connect to MongoDB
// const mongoUrl = MONGODB_URI;
// mongoose.Promise = bluebird;

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
//     () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
// ).catch(err => {
//     console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
//     // process.exit();
// });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     store: new MongoStore({
//         mongoUrl,
//         mongoOptions: {
//             autoReconnect: true
//         }
//     })
// }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * API examples routes.
 */
app.get("/test", apiController.getTestCheck);


export default app;
