export const users = [
    {
        id: 1,
        username: "Alex",
        avatar: "../res/my_profilePicture.png",
        completeName: "Alex Tiganete",
    },
    {
        id: 2,
        username: "Andrei",
        avatar: "../res/person1.png",
        completeName: "Andrei Popescu"
    }
];

export function findUser(username) {
    for(let i = 0; i < users.length; i++) {
        if(username === users[i].username) {
            return users[i];
        }
    }
}