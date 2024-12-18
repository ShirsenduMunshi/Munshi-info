"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left Section */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-purple-500"><Link href="/">Munshi Blogs</Link></span>. All rights reserved.
        </div>

        {/* Right Section */}
        <div className="text-sm">
          <a
            href="https://github.com/ShirsenduMunshi/Munshi-Blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}