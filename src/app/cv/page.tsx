import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Calendar } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 mr-2 mb-2">
    {children}
  </span>
)

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto p-8 py-16">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-16">
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
              <h1 className="text-xl font-bold text-accent-teal">Curriculum Vitae</h1>
              <p className="text-muted-foreground mb-4">John Doe</p>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm text-foreground hover:text-accent-teal transition-colors flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-3 py-1.5"
                >
                  <ArrowLeft className="mr-1" size={16} />
                  <span>Back</span>
                </Link>
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
        </div>

        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>

      <div className="border-b border-border pb-6 mb-10">
        <h1 className="text-xl font-bold mb-2">John Doe, MS</h1>
        <p className="text-muted-foreground">
          Detail-oriented Full Stack Developer dedicated to building high-quality applications.
        </p>
        <p className="text-muted-foreground">New York, NY • john.doe@email.com</p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="text-base">
          Dedicated Full Stack Developer with a passion for clean code and user-centered design. 8+ years of experience
          effectively building scalable web applications and leading development teams. Confident in ability to
          architect solutions that balance technical excellence with business requirements. Committed to continuous
          learning and contributing to the developer community.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-6">Work Experience</h2>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <div>
              <h3 className="text-base font-bold">TechCorp Inc.</h3>
              <p className="text-base">Senior Full Stack Developer</p>
            </div>
            <p className="text-muted-foreground">January 2019 – Present</p>
          </div>
          <div className="mb-3">
            <TechTag>React</TechTag>
            <TechTag>TypeScript</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>GraphQL</TechTag>
            <TechTag>AWS</TechTag>
          </div>
          <p className="text-base italic mb-4">
            Lead developer for the company's flagship SaaS platform serving 500+ enterprise clients.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>
              Spearheaded migration from monolith to microservices architecture, improving deployment frequency by 300%.
            </li>
            <li>Implemented comprehensive testing strategy that reduced production bugs by 75%.</li>
            <li>Mentored junior developers through code reviews and pair programming sessions.</li>
            <li>Designed and implemented RESTful APIs that processed over 2M requests daily.</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <div>
              <h3 className="text-base font-bold">InnovateSoft</h3>
              <p className="text-base">Full Stack Developer</p>
            </div>
            <p className="text-muted-foreground">March 2015 – December 2018</p>
          </div>
          <div className="mb-3">
            <TechTag>React</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>Express</TechTag>
            <TechTag>MongoDB</TechTag>
            <TechTag>Docker</TechTag>
          </div>
          <p className="text-base italic mb-4">
            Developed and maintained B2B marketing automation tools used by mid-market companies.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Built responsive front-end interfaces using React that improved user satisfaction scores by 45%.</li>
            <li>Designed and implemented RESTful APIs that processed over 1M requests daily.</li>
            <li>Optimized database queries that reduced average response time from 1.2s to 200ms.</li>
            <li>Collaborated with UX designers to implement intuitive user interfaces.</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <div>
              <h3 className="text-base font-bold">TechStart Solutions</h3>
              <p className="text-base">Junior Web Developer</p>
            </div>
            <p className="text-muted-foreground">June 2013 – February 2015</p>
          </div>
          <div className="mb-3">
            <TechTag>HTML/CSS</TechTag>
            <TechTag>JavaScript</TechTag>
            <TechTag>jQuery</TechTag>
            <TechTag>PHP</TechTag>
            <TechTag>MySQL</TechTag>
          </div>
          <p className="text-base italic mb-4">
            Developed websites and web applications for small to medium-sized businesses.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Built and maintained over 20 client websites using responsive design principles.</li>
            <li>Implemented e-commerce solutions using WooCommerce and custom PHP solutions.</li>
            <li>Collaborated with design team to translate mockups into functional websites.</li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap">
          {[
            "JavaScript/TypeScript",
            "React & Next.js",
            "Node.js",
            "RESTful APIs",
            "GraphQL",
            "AWS/Cloud Services",
            "CI/CD Pipelines",
            "System Architecture",
            "Database Design",
            "Performance Optimization",
            "Testing (Jest, Cypress)",
            "Agile Methodologies",
          ].map((skill, index) => (
            <TechTag key={index}>{skill}</TechTag>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div>
            <p className="font-bold text-base">Master of Science in Computer Science</p>
            <p className="text-muted-foreground">Massachusetts Institute of Technology</p>
          </div>
          <p className="text-muted-foreground">2014</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <p className="font-bold text-base">Bachelor of Science in Computer Engineering</p>
            <p className="text-muted-foreground">University of California, Berkeley</p>
          </div>
          <p className="text-muted-foreground">2012</p>
        </div>
      </div>
    </div>
  )
}
