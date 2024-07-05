import getUsers from "../../../../services/getUsers"

export async function Page(props){
    const getUserList = getUsers();
    const users = await getUserList;    
    const currentId = props.params.userId
    console.log(props.params.username);
    const userData= users[currentId -1]; 
    console.log(users[currentId -1]);

    return(
        <div>
            <h3>User Detail Page</h3>
            <h4>Id:{userData.id}</h4>
            <h4>Name:{userData.name}</h4>
            <h4>Email:{userData.email}</h4>
            <h4>Website:{userData.website}</h4>
        </div>  
    )
}
 async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;  
    return users.map(user=>({
        userId:user.id.toString()
    }))

}