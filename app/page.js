import Image from "next/image";
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Animation from "@/components/Animation";


export default function Home() {

  const dirContent = fs.readdirSync("public/Content/blogs", "utf-8")
  const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(`public/Content/blogs/${file}`, "utf-8")
    const { data } = matter(fileContent)
    return data
  });

  return (
    <>
      <main className="container max-w-[90%] mx-auto">

        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              <span className="font-semibold">Empowering Developers to Code, Create, and Conquer</span><br className="hidden lg:block" />
            </h1>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Discover insightful articles, tutorials, and guides to master programming and web development. Whether you're a beginner or a seasoned developer, there's something for everyone. <br className="hidden lg:block" />
            </p>

            <div className="mt-6 p-3 flex justify-between bg-transparent rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <Button variant="" ><Link href={`/blog`}>Explore Blogs</Link></Button>
              <Button variant="destructive" ><Link href={`/signup`}>Sign Up</Link></Button>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              width={500}
              height={500}
              className="w-full h-full max-w-md mx-auto"
              priority
            />
          </div>
        </section>
        <Animation />
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Why Choose Us ?</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-300 mb-2">
              At Munshi Blogs, we believe in sharing knowledge that helps you build better, faster, and more efficiently. Our content is curated by experienced developers and passionate creators who understand the challenges of coding and web development.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Features:</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-300">🚀 Actionable Guides: Step-by-step tutorials to level up your skills.</p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">💻 Trending Topics: Stay updated with the latest in programming and web tech.</p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">🌟 Real-World Projects: Learn by building real-world applications.</p>

            </div>
          </div>
        </section>

        <div className="bg-black h-1 w-full"></div>

        <section className="py-16  dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Featured Articles
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Discover our most popular and trending content
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {blogs.slice(0, 3).map((blog, index) => (
                <div key={index} className=" rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 ">
                      {blog.title}
                    </h2>

                    <p className=" mb-4 line-clamp-3">
                      {blog.description}
                    </p>

                    <div className="flex items-center justify-between text-sm  mb-4">
                      <span>{blog.author}</span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>

                    <Button
                      variant="secondary"
                      asChild
                    >
                      <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
