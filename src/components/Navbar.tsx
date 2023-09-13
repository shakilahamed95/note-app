import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="bg-[#181E30] w-full p-1">
      <div className="container mx-auto flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src="/img.png"
            width={80}
            height={80}
            alt="Logo"
            className="rounded-full"
          />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
          <Link href={"/add-new-note"} className="text-white text-lg">
            Add Note
          </Link>
          {session?.user ? (
            <button onClick={() => signOut()} className="text-white text-lg">
              LogOut
            </button>
          ) : (
            <Link href={"/login"} className="text-white text-lg">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
