import { API_BASE_URL } from "./config/constants";

export default async function Home() {
  console.log(process.env.DB_PASSWORD)

  return (
    <main>
    {
      process.env.NODE_ENV=="development"?
      <h1>you are on development mode</h1>
      :
      <h1>you are on production mode</h1> 
    }
      <h1>Environment Variables in Next js</h1> 

     <h1>{API_BASE_URL}</h1> 
    </main>
  );
}

