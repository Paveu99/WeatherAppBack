import express, {json} from "express"
import cors from "cors"
import "express-async-errors"
import {getData} from "./utils/db";
import {weatherRouter} from "./routers/weather";
import {main} from "./routers/main";
import {handleError} from "./utils/errors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(json());

app.use('/', main);
app.use('/weather', weatherRouter);

app.use(handleError);
app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3001')
});