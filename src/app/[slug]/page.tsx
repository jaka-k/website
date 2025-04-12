import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Github, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  content: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    date: "April 5, 2025",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look to the future, several key trends are shaping the way we build and interact with web applications.</p>
      
      <h2>The Rise of AI-Assisted Development</h2>
      <p>Artificial intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing and debugging, AI tools are enhancing productivity and enabling developers to focus on more creative aspects of their work.</p>
      
      <h2>WebAssembly and the Future of Performance</h2>
      <p>WebAssembly (Wasm) continues to gain traction as a way to run high-performance code in the browser. This technology allows developers to write code in languages like Rust, C++, and Go, and run it alongside JavaScript at near-native speeds.</p>
      
      <h2>The Continued Evolution of JavaScript</h2>
      <p>JavaScript remains the backbone of web development, with new features and improvements being added regularly. The language continues to evolve with better performance, improved syntax, and enhanced capabilities.</p>
      
      <h2>Serverless Architecture and Edge Computing</h2>
      <p>The shift toward serverless architecture and edge computing is changing how we think about backend development. By running code closer to users and eliminating the need to manage servers, developers can build more scalable and responsive applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with new tools and technologies making it easier than ever to build powerful, performant web applications. By staying informed about these trends and embracing new approaches, developers can create better experiences for users and more maintainable codebases for themselves.</p>
    `,
    slug: "future-of-web-development",
  },
  {
    id: "2",
    title: "Designing for Accessibility",
    date: "March 22, 2025",
    content: `
      <p>Accessibility in web design isn't just a nice-to-have feature—it's a necessity. Creating websites that are accessible to everyone, regardless of ability or disability, is not only the right thing to do but also makes good business sense.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites that can be used by people with disabilities. This includes visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. The four main principles are:</p>
      <ul>
        <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable</strong>: User interface components must be operable by all users.</li>
        <li><strong>Understandable</strong>: Information and operation must be understandable.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted by a wide variety of user agents.</li>
      </ul>
      
      <h2>Practical Tips for Accessible Design</h2>
      <p>Here are some practical ways to improve the accessibility of your websites:</p>
      <ul>
        <li>Use semantic HTML to provide meaning and structure to your content.</li>
        <li>Ensure sufficient color contrast between text and background.</li>
        <li>Provide text alternatives for non-text content like images.</li>
        <li>Make sure all functionality is available from a keyboard.</li>
        <li>Design forms with clear labels and error messages.</li>
        <li>Test your website with screen readers and other assistive technologies.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Designing for accessibility benefits everyone, not just users with disabilities. By following accessibility best practices, you create a better user experience for all visitors to your website.</p>
    `,
    slug: "designing-for-accessibility",
  },
  {
    id: "3",
    title: "The Power of TypeScript",
    date: "March 10, 2025",
    content: `
      <p>TypeScript has transformed the JavaScript ecosystem, bringing static typing to a dynamically typed language. This powerful superset of JavaScript has gained widespread adoption for good reason.</p>
      
      <h2>What Makes TypeScript Special?</h2>
      <p>TypeScript adds optional static typing to JavaScript, allowing developers to define types for variables, function parameters, return values, and more. This brings several benefits:</p>
      <ul>
        <li>Catch errors during development rather than at runtime</li>
        <li>Improve code quality and maintainability</li>
        <li>Enhance IDE support with better autocompletion and documentation</li>
        <li>Facilitate refactoring with confidence</li>
      </ul>
      
      <h2>TypeScript in Modern Web Development</h2>
      <p>TypeScript has become an essential tool in modern web development frameworks and libraries:</p>
      <ul>
        <li><strong>React</strong>: TypeScript provides type checking for props, state, and events.</li>
        <li><strong>Angular</strong>: Built with TypeScript from the ground up.</li>
        <li><strong>Vue</strong>: Offers excellent TypeScript integration, especially in Vue 3.</li>
        <li><strong>Node.js</strong>: Brings type safety to server-side JavaScript.</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>Adding TypeScript to your project is straightforward:</p>
      <ol>
        <li>Install TypeScript: <code>npm install typescript --save-dev</code></li>
        <li>Create a tsconfig.json file to configure TypeScript</li>
        <li>Start writing .ts files instead of .js files</li>
        <li>Use the TypeScript compiler to convert your code to JavaScript</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>TypeScript has revolutionized JavaScript development by bringing the benefits of static typing without sacrificing the flexibility that makes JavaScript great. As projects grow in size and complexity, the advantages of TypeScript become increasingly apparent, making it an invaluable tool for modern web development.</p>
    `,
    slug: "power-of-typescript",
  },
];

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center mb-10 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5 w-fit"
      >
        <ArrowLeft className="mr-1" size={16} />
        <span>Back to all notes</span>
      </Link>

      <header className="flex flex-col sm:flex-row sm:justify-between mb-16">
        <div className="flex flex-col">
          <div className="flex items-start gap-5 mb-4">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Profile Picture"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-teal transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <Link
                href="/book"
                className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </header>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-xl font-bold mb-3">{post.title}</h1>
        <div className="mb-10">
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="text-base leading-relaxed"
        />
      </article>
    </div>
  );
}
