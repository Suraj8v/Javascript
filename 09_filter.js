const personArray =
[
    {
        name : "person 1",
        age : 30,
        country: "india"
    },
    {
        name : "person 2",
        age: 22,
        country : "USA"
    },
    {
        name : "person 3",
        age : 34,
        country : "USA"
    }
]

const getAllPersonFromUSA = personArray.filter((singlePerson,index)=>
{
    return singlePerson.country === "USA"
})

console.log(getAllPersonFromUSA)