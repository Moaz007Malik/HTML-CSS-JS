import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const newfruit = new Fruit({
    name: "Avacado",
    rating: 9,
    review: "It is an avacodish avacado."
});

// newfruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
const newperson = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: newfruit
})

// newperson.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 8,
//     review: "Very Fresh Kiwi"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 9,
//     review: "Very Oringy Orange"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Very Banini Banana"
// });

//Insertion of data

// Fruit.insertMany([kiwi,orange,banana]);

// Read the data that is in the database

async function findFruits() {
    try {
        const fruits = await Fruit.find();
        fruits.forEach(fruit => {
            console.log(fruit);
            // console.log(fruit.name);
        });
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.connection.close(); // Close the connection after the query
    }
}

findFruits();

//Updation

// async function updateFruit() {
//     try {
//         const result = await Person.updateOne({ _id: "6658c7991f6956ddbb7a4b1d" }, { favouriteFruit: newfruit });
//         console.log("Update successful:", result);
//     } catch (err) {
//         console.log("Update failed:", err);
//     } finally {
//         mongoose.connection.close(); // Close the connection after the query
//     }
// }

// // Call the update function
// updateFruit();

//Deletion DeleteOne()

// async function deleteFruit() {
//     try {
//         const result = await Fruit.deleteOne({ _id: "6658c22c3ef9297c0eb05016" });
//         console.log("Deleted successful:", result);
//     } catch (err) {
//         console.log("Deletion failed:", err);
//     } finally {
//         mongoose.connection.close(); 
//     }
// }

// // Call the update function
// deleteFruit();

//Deletion DeleteMany()

// async function deletePeople() {
//     try {
//         const result = await Person.deleteMany({ name: "Moaz" });
//         console.log("Deleted successful:", result);
//     } catch (err) {
//         console.log("Deletion failed:", err);
//     } finally {
//         mongoose.connection.close(); 
//     }
// }

// // Call the update function
// deletePeople();

