import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <div className="w-full h-screen flex flex-col items-center">
          <header className="w-full flex flex-col items-center">
            <div className="w-full h-12 bg-black" />
            <div className="login-container w-full h-35 flex flex-col justify-start items-start p-5">
              <Image
                  src="/GB-title.png"
                  alt="GymBeam-title"
                  width={265}
                  height={75}
              />
            </div>
          </header>
          {children}
        </div>
        <footer className="w-full h-12 flex flex-row justify-center items-center bg-black text-white">
          <p className="text-sm">© 2014 - 2025 GymBeam</p>
        </footer>
      </body>
    </html>
  );
}
