
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic= "force-dynamic" //make changes when dynamic added(if not added it doesnt show in ui)
//made using uploadthing( easy, just create a new and upload your pic)
//now every changes are reflected back
// const mockdata=[
//   "https://utfs.io/f/0af21d12-8de3-48fe-bbfd-179d6241251b-1d.png",
// "https://utfs.io/f/208c2cd7-218b-4a84-aebd-9f182dfdc5e4-1e.png"
// ]
//making them array in objects
// const mockimages=mockdata.map((url,index)=>({
//   id:index+1,
//   url
// }))
 async function Imagess(){
  const images=await db.query.images.findMany({
    orderBy:(model,{desc})=>desc(model.id)
  });
  return(
<div className=" flex flex-wrap gap-4">
       {/* {post.map((datas)=>(
        <div key={datas.id}>{datas.name}</div>
       ))} */}
        {images.map((image,index)=>(
          <div className=" w-48 flex flex-col"  key={image.id}>
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}

      </div>
  )
}
export default async function HomePage() {
 
  // console.log(post)
  return (
    <main>
      <SignedOut>
        <div className=" w-full text-center justify-center items-center ">
          <p>bro lock in !!</p>
        </div>
      </SignedOut>
        <SignedIn>
          <Imagess/>
        </SignedIn>
 
    </main>
  );
}
