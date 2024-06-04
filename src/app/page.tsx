import Link from "next/link";
import { db } from "~/server/db";

//made using uploadthing( easy, just create a new and upload your pic)
const mockdata=[
  "https://utfs.io/f/0af21d12-8de3-48fe-bbfd-179d6241251b-1d.png",
"https://utfs.io/f/208c2cd7-218b-4a84-aebd-9f182dfdc5e4-1e.png"
]
//making them array in objects
const mockimages=mockdata.map((url,index)=>({
  id:index+1,
  url
}))
export default async function HomePage() {
  const post=await db.query.posts.findMany();
  console.log(post)
  return (
    <main>
      <div className=" flex flex-wrap gap-4">
       {post.map((datas)=>(
        <div key={datas.id}>{datas.name}</div>
       ))}
        {[...mockimages,...mockimages,...mockimages,...mockimages,].map((image,index)=>(
          <div className=" w-48" key={image.id +"-"+ index}>
            <img src={image.url} />
          </div>
        ))}

      </div>
    tenzin delek trying
    </main>
  );
}
