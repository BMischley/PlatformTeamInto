import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="bg-white mx-auto  px-4 sm:px-6 w-full" >
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <nav className="hidden space-x-10 md:flex">
          <span
            onClick={() => router.push("/")}
            className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            About
          </span>

          <span
            onClick={() => router.push("/courses")}
            className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            Courses
          </span>

        
        </nav>
      </div>
    </div>
  );
}

export default Header;
