const users = [];

const addUser = ({ id, name, room }) =>{
// jabvascript by me =  javascript by others
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();

const existngUser = users.find((user)  => user.room === room && user.name ===  name);
    if(existngUser)
        {
            return { error:'Username is taken' }
        }
        const user = { id, name , room };
        users.push(user);
    return { user }
    }

const removeUser = () =>{
    const index = users.findIndex((user) =>{

    })
}
const getUser = () =>{

}

const getUsersRoom = () =>{

}