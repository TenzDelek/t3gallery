export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            
          <div className=" w-full"> I am the second bro</div> 
          {/* usful in dashboard layering */}
          {children}</div>
      
    );
  }
  