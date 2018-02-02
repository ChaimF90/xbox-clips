require('dotenv').config();
import * as express from 'express';
const app = express();

import router from './api';

app.use('/api', router);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server is running on port ${port}`));