import Link from "next/link";

export default function StudentList(){
    return(
             <div>
            <h1>Student List Page</h1>
            <ul>
                <li>
                    <Link href="./studentlist/het">Het</Link>
                </li>
                <li>
                    <Link href="./studentlist/harsh">Harsh</Link>
                </li>
                <li>
                    <Link href="./studentlist/siddharth">Siddharth</Link>
                </li>
                <li>
                    <Link href="./studentlist/chirag">Chirag</Link>
                   </li>
            </ul>
        </div>
    )
}