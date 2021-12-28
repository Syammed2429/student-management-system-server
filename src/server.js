const { app, port } = require('./index.js')
const connect = require('./config/db')

app.listen(port, async () => {
    await connect();
    console.log(`listening at ${port}`);
});