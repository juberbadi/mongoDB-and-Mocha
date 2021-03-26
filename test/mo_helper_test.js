const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //ES6 - promise

before((done) => {
  mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => {
      //console.log("Connected");
      done(); //connection is done go to the next connection
    })
    .on("error", (error) => {
      console.log("Your Error", error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.students.drop(() => {
    done();
  });
});
