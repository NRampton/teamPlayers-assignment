const express = require('express');
const app = express();
const PORT = 8000;


require('./server/config/middleware')(app);
require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
