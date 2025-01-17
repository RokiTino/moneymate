import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";
import Image from "@/node_modules/next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Robertino', lastName: 'Dimoski'}

    return (
        <main className="h-full w-full flex font-inter">
        <Sidebar user={loggedIn} />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} width={30} height={30} alt="menu icon" />
            <div>
              <MobileNavBar user={loggedIn} />
            </div>
          </div>
          
            {children}
            </div>
        </main>
  );
}
