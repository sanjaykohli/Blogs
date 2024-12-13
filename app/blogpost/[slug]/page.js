import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// Define static paths
export async function generateStaticParams() {
  const files = fs.readdirSync('content') // Read all markdown files from the content folder
  return files.map(file => ({
    slug: file.replace('.md', '') // Return just the slug parameter
  }))
}

export default async function Page({ params }) {
  const filepath = path.join('content', `${params.slug}.md`)
  
  // Check if the file exists
  if (!fs.existsSync(filepath)) {
    notFound() // Returns a 404 page if the file is not found
    return
  }
  
  // Read file content
  const fileContent = fs.readFileSync(filepath, 'utf-8')
  const { content, data } = matter(fileContent)
  
  // Process markdown content into HTML
  const processor = unified()
    .use(remarkParse)                  // Parse markdown
    .use(remarkRehype)                 // Convert to HTML
    .use(rehypeDocument, { title: '👋🌍' })  // Add document title
    .use(rehypeFormat)                 // Format HTML
    .use(rehypeStringify)              // Convert to HTML string
    .use(rehypeSlug)                   // Add slugs to headings
    .use(rehypeAutolinkHeadings)       // Add auto links to headings
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    })
    
  // Generate HTML from markdown content
  const htmlContent = (await processor.process(content)).toString()

  // Format the date if it's a Date object
  const formattedDate = data.date instanceof Date ? data.date.toLocaleDateString() : data.date;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  )
}
