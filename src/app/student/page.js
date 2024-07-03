export default function Page(){
    return(
        <div>
            <h1>Student Page</h1>
        </div>
    )
}
export function generateMetadata({params}){
    return{
        title:"Student page title",
        description:"Student page description"
    }
}