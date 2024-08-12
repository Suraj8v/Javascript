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
        country : "russia"
    }
]

let getAllNames = personArray.map((singlePerson, index)=>
{
   // console.log(singlePerson)
    return singlePerson.name
})

console.log(getAllNames)