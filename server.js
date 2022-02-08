const app = require('./app');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/users')
.then(()=>console.log('mongodb connected successfully'))
.catch(()=>console.log('mongodb connection failed'))

app.listen(process.env.PORT || 4001,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})