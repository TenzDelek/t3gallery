
import "server-only"
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";


export async function getImages(){
    //only get the image that user should see
    const user=auth()
    if(!user.userId)throw new Error("Unauthorised")//not let other see your image
    const images=await db.query.images.findMany({
        where:(model,{eq})=>eq(model.userId,user.userId),
        orderBy:(model,{desc})=>desc(model.id)
      });
    return images
}