import Image from "next/image"
import Profile from '../../public/vercel.svg';
export default function Home(){
  return(
    <main>
      <h1>Image Optimization in Next</h1>
      {/* <Image src={Profile}
      />
      <img
      src={Profile.src} /> */}

      <Image
      src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1719911875~exp=1719912475~hmac=997b0f3417f6cbb070c0794e807a18f7fb8392e664880942b736c730331c7f78"
      width={200}
      height={200}
       />
    </main>
  )
}