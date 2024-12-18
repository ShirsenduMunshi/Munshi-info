import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { unified } from 'unified'
import OnThisPage from "@/components/onthispage"

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  transformers: [
    transformerCopyButton({
      visibility: 'always',
      feedbackDuration: 3000,
    }),
  ],
}

async function getProcessedContent(content) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog Post' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, rehypePrettyCodeOptions)

  try {
    const result = await processor.process(content)
    return result.toString()
  } catch (error) {
    console.error('Error processing content:', error)
    throw new Error('Failed to process markdown content')
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'public/Content/blogs')
  const filenames = fs.readdirSync(postsDirectory)

  // Generate static params from filenames
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }))
}

export default async function BlogPost({ params }) {
  try {
    const { slug } = params
    const postsDirectory = path.join(process.cwd(), 'public/Content/blogs')
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      throw new Error('Blog post not found')
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)
    const htmlContent = await getProcessedContent(content)

    return (
      <div className="max-w-3xl mx-auto p-4">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
              &quot;{data.excerpt}&quot;
            </p>
            <div className="flex gap-2">
              <p className="text-sm italic">By {data.author}</p>
              {/* Convert Date object to string */}
              <p className="text-sm">/                   {new Date(data.date).toLocaleDateString()}
              </p>
            </div>
          </header>

          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert max-w-none"
          />

          <OnThisPage htmlContent={htmlContent} />
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error rendering page:', error)
    throw new Error('Blog post rendering failed')
  }
}

// import fs from "fs"
// import path from "path"
// import matter from "gray-matter"
// import { notFound } from "next/navigation"
// import rehypeDocument from 'rehype-document'
// import rehypeFormat from 'rehype-format'
// import rehypeStringify from 'rehype-stringify'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypePrettyCode from "rehype-pretty-code"
// import { transformerCopyButton } from '@rehype-pretty/transformers'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'
// import { unified } from 'unified'

// const rehypePrettyCodeOptions = {
//   theme: "github-dark",
//   transformers: [
//     transformerCopyButton({
//       visibility: 'always',
//       feedbackDuration: 3000,
//     }),
//   ],
// }

// async function getProcessedContent(content) {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title: '👋🌍' })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypeSlug)
//     .use(rehypeAutolinkHeadings)
//     .use(rehypePrettyCode, rehypePrettyCodeOptions)

//   try {
//     const result = await processor.process(content)
//     return result.toString()
//   } catch (error) {
//     console.error('Error processing content:', error)
//     throw new Error('Failed to process markdown content')
//   }
// }

// export default async function Page({ params }) {
//     try {
//       // Await the params
//       const param = await params
//       const slug = await param.slug
//       const filepath = path.join(process.cwd(), 'content/blogs', `${slug}.md`)

//       if (!fs.existsSync(filepath)) {
//         notFound()
//       }

//       const fileContent = fs.readFileSync(filepath, "utf-8")
//       const { content, data } = matter(fileContent)
//       const htmlContent = await getProcessedContent(content)

//       return (
//         <div className="max-w-3xl mx-auto p-4">
//           <article>
//             <header className="mb-8">
//               <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//               <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//                 &quot;{data.excerpt}&quot;
//               </p>
//               <div className="flex gap-2">
//                 <p className="text-sm italic">By {data.author}</p>
//                 {/* Convert Date object to string */}
//                 <p className="text-sm">
//                   {new Date(data.date).toLocaleDateString()}
//                 </p>
//               </div>
//             </header>

//             <div 
//               dangerouslySetInnerHTML={{ __html: htmlContent }} 
//               className="prose dark:prose-invert max-w-none"
//             />

//             <OnThisPage htmlContent={htmlContent}/>
//           </article>
//         </div>
//       )
//     } catch (error) {
//       console.error('Error rendering page:', error)
//       notFound()
//     }
//   }