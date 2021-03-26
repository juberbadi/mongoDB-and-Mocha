const Student = require("../app/student");
const assert = require("assert");

describe("Create records", () => {
  it("create a user in DB", () => {
    //assert(false);
    const sam = new Student({ name: "Sam" });
    sam
      .save()
      .then(() => {
        assert(!sam.isNew);
      })
      .catch(() => {
        console.log("error");
      });
  });
});

// //All read test
// //Create separate file mo_read_test.js

// describe("Read Test", () => {
//   let reader;
//   beforeEach(() => {
//     //(done)
//     reader = new Student({ name: "Reader" });
//     reader.save().then(() => {
//       //done();
//     });
//   });

//   it("Read a user: reader", () => {
//     //(done)
//     Student.find({ name: "Reader" }).then((students) => {
//       //id is a BSON formate value convert into String and compare it
//       assert(reader._id.toString() === student[0]._id.toString());
//       //done();
//     });
//   });
// });

// //All delete test
// //Create separate file mo_delete_test.js

// describe("Delete Test", () => {
//   let deleter;

//   beforeEach((done) => {
//     deleter = new Student({ name: "Deleter" });
//     deleter.save().then(() => done());
//   });

//   it("A delete test for deleter", (done) => {
//     Student.findByIdAndDelete(deleter._id)
//       .then(() => Student.findOne({ name: "Deleter" }))
//       .then((student) => {
//         assert(student === null);
//         done();
//       });
//   });
// });

// //All Update test
// //Create separate file mo_update_test.js

// describe("Update Tests", () => {
//   let updater;
//   beforeEach(() => {
//     updater = new Student({ name: "Updater" });
//     updater.save().then(() => done());
//   });
//   it("Set n Save test", () => {
//     updater.set("name", "UpUpdater");
//     updater
//       .save()
//       .then(() => Student.find({}))
//       .then((students) => {
//         assert(students[0].name !== "Updater");
//       });
//   });
// });
