"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

    useEffect(() => {
      setProgress(20)

      setTimeout(() => {
        setProgress(40)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 400);
     
    }, [pathname])

    useEffect(() => {
      setTimeout(() => {
       setProgress(0)
      }, 50);
    }, [])

  return (
    <nav className="bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}/>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Munshi-info
        </Link>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center justify-center">
          <Link href="/" className="font-bold hover:text-violet-500 active:text-violet-700">
            Home
          </Link>
          <Link href="/about" className="font-bold hover:text-violet-500 active:text-violet-700">
            About
          </Link>
          <Link href="/contact" className="font-bold hover:text-violet-500 active:text-violet-700">
            Contact
          </Link>
          <Link href="/blog" className="font-bold hover:text-violet-500 active:text-violet-700">
            Blogs
          </Link>
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button variant="destructive">Sign Up</Button>
            </Link>
          </div>
          <span className="mx-2"><ModeToggle /></span>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (<>
    <span className="mx-2"><ModeToggle /></span>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-2">
          ☰☰
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem>
          <Link href="/" className="w-full font-bold hover:text-violet-500 active:text-violet-700">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about" className="w-full font-bold hover:text-violet-500 active:text-violet-700">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/contact" className="w-full font-bold hover:text-violet-500 active:text-violet-700">
            Contact
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/blog" className="w-full font-bold hover:text-violet-500 active:text-violet-700">
            Blogs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href="/signup">
              <Button variant="destructive">Sign Up</Button>
            </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>);
}
