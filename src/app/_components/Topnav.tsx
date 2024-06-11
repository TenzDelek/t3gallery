'use client'
import {SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function Topnav()
{
  const router=useRouter()
  return (
    
    <nav className=" p-4 border-b font-semibold text-sm flex items-center justify-between w-full">
      <div>Gallery</div>
      <div className=" flex flex-row">
        {/* if the user is signout generate signinbutton  # important that ed is there*/}
        <SignedOut> 
            <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{router.refresh()}}/>
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  
  )
}