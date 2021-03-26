const Student = require("../app/student");
const assert = require("assert");

describe("Read Test", () => {
  let reader;
  beforeEach(() => {
    //(done)
    reader = new Student({ name: "Reader" });
    reader.save().then(() => {
      //done();
    });
  });

  it("Read a user: reader", () => {
    //(done)
    Student.find({ name: "Reader" }).then((students) => {
      //id is a BSON formate value convert into String and compare it
      assert(reader._id.toString() === student[0]._id.toString());
      //done();
    });
  });
});
