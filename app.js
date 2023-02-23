const express = require('express') // * importamos express en nuestro app.
const app = express()
const port = 8000
const morgan = require('morgan')
const userRoutes = require('./routes/user.routes');

app.use(morgan('tiny'))
app.use(express.json());
app.use(userRoutes);


app.listen(port, () => {
})