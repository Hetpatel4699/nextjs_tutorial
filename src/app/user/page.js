import {redirect} from 'next/navigation'
export default function Page(){
    redirect("/about");
    return (
        <div>
            <h1>User Page </h1>
        </div>
    )
}