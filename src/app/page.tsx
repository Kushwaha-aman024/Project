
import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
  return (
    <nav className="bg-white border-b-2 border-blue-500 md:py-2 py-4 px-4">
      <div className="md:w-full w-11/12 mx-auto md:px-4 px-0">
        <div className="flex md:justify-between justify-center md:gap-0 gap-6 items-center">
          <div className="flex items-center md:px-2 p-0">
            <Link href="/" className="flex items-center">
              <Image src={"/logo.png"} alt="Logo" width={60} height={50} />
              <span className="font-bold md:ml-2 md:text-3xl text-xl text-blue-800">
                Finstar Avenue
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-end font-bold gap-1">
            <Link
              href="/financial-services"
              className="py-1 px-2 text-blue-500 hover:bg-blue-200 rounded"
            >
              Financial Services
            </Link>
            <Link
              href="/it-services"
              className="py-1 px-2 text-blue-500 hover:bg-blue-200 rounded"
            >
              IT Services
            </Link>
            <Link
              href="/it-recruitment"
              className="py-1 px-2 text-blue-500 hover:bg-blue-200 rounded"
            >
              IT Recruitment
            </Link>
            <Link
              href="/bpo-services"
              className="py-1 px-2 text-blue-500 hover:bg-blue-200 rounded"
            >
              BPO Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

