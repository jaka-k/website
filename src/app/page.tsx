"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Profile from "@/components/profile/profile";
import type React from "react";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    date: "April 5, 2025",
    excerpt:
      "Exploring the latest trends in web development and what they mean for the industry going forward.",
    slug: "future-of-web-development",
  },
  {
    id: "2",
    title: "Designing for Accessibility",
    date: "March 22, 2025",
    excerpt:
      "How to ensure your websites are accessible to everyone, regardless of ability or disability.",
    slug: "designing-for-accessibility",
  },
  {
    id: "3",
    title: "The Power of TypeScript",
    date: "March 10, 2025",
    excerpt:
      "Why TypeScript has become an essential tool for modern JavaScript development.",
    slug: "power-of-typescript",
  },
  {
    id: "4",
    title: "Building TaskFlow: A Minimalist Task Manager",
    date: "February 28, 2025",
    excerpt:
      "The design philosophy and technical challenges behind creating a distraction-free productivity app.",
    slug: "building-taskflow",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="flex flex-col sm:flex-row sm:justify-between mb-20">
        <div className="flex flex-col">
          <div className="flex items-start gap-5 mb-4">
            <Profile />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Jaka Krajnc</h1>
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

      {/* Main content */}
      <main className="space-y-16">
        {/* Introduction */}
        <section>
          <p className="text-base mb-8">
            I write about web development, system design, and developer tools.
            Currently building at TechCorp Inc. Previously at InnovateSoft.
          </p>

          {/* CV CTA */}
          <Link
            href="/cv"
            className="text-sm text-foreground hover:text-accent-teal transition-colors inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
          >
            <span>View My CV</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>

        {/* Featured Project */}
        <section className="border-t border-b border-border py-12">
          <h2 className="text-xl font-bold mb-8">Featured Project</h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src="/mrag-1.png"
                  alt="TaskFlow App Screenshot"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">TaskFlow</h3>
              <p className="text-base mb-6">
                A minimalist task management application designed to help you
                focus on what matters. Built with React, TypeScript, and a
                clean, distraction-free UI.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="/blog/building-taskflow"
                  className="text-sm text-foreground hover:text-accent-teal transition-colors inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
                >
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="#"
                  className="text-sm text-foreground hover:text-accent-teal transition-colors inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>View code</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog posts */}
        <section>
          <h2 className="text-xl font-bold mb-10 border-b border-border pb-3">
            Recent Notes
          </h2>

          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2 group-hover:text-accent-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
