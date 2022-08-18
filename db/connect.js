const mongoose = require("mongoose");

const connectDBFn = async (app,port) => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}`);

        app.listen(port, () => {
            console.log(`cli-nodejs-api listening at http://localhost:${port}`)
        });
    } catch(err) {
      console.log(err);
    }
}
//export wep kenapa ye
module.exports = connectDBFn;