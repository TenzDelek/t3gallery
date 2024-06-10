import {SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Topnav()
{
  return (
    
    <nav className=" p-4 border-b font-semibold text-sm flex items-center justify-between w-full">
      <div>Gallery</div>
      <div>
        {/* if the user is signout generate signinbutton  # important that ed is there*/}
        <SignedOut> 
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  
  )
}