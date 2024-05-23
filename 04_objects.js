let user = [
    {
        "firstName" : "Suraj" ,
        "gender" : "male"
    },
    {
        "firstName" : "Virat",
        "gender" : "male"
    }
]

for(let i=0; i<user.length; i++)
{
    console.log(user[i])
}

for(let i=0; i<user.length; i++)
{
    if(user[i]["firstName"]=="Suraj")
    {
        console.log(user[i]["firstName"])
    }
}