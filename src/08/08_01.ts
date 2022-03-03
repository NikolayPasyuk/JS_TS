
//users[1]
var user = {id: 100500, name: "Igor"}
users[user.id] = user;
delete users[user.id]
users[user.id].name = "Masha"

export const usersArray = [
    {is: 101, name: "Nick"},
    {is: 3232312, name: "Natasha"},
    {is: 1212, name: "Valera"},
    {is: 1, name: "Katya"},
]

//usersArray.find(u=> u.id === 1)
//var usersCopy = [...usersArray.filter(), user]
//var usersArray = usersArray.filter(u=> u.id !== user.id)