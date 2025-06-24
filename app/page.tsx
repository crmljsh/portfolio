import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    "Python",
    "C++",
    "HTML",
    "JavaScript",
    "CSS",
    "SQLite",
    "Raspberry Pi",
    "Arduino",
    "Meta Business Suite",
    "Office Productivity Tools",
    "Visual Studio Code",
    "GitHub"
  ]

  const projects = [
    {
      title: "Automated Medicine Cabinet",
      description:
        "A system that aims to automate the medicine quantity processes and deliver real-time expiry notifications",
      image: "/medicab.jpg?height=200&width=300",
      technologies: ["Python", "Raspberry Pi", "Flask", "HTML",],
      github: "https://github.com/crmljsh",
      docu: "/softwarewalkthrough.pdf",
    },
  ]

  const certificates = [
    {
      title: "English Proficiency Certificate",
      issuer: "EF SET",
      date: "2025",
      credentialId: "uAtTkU",
      link: "https://cert.efset.org/uAtTkU",
      description: "Certified English proficiency through the EF Standard English Test (EF SET), demonstrating skills in reading, writing, speaking and listening comprehension.",
    },
    {
      title: "Fundamentals of Machine Learning and Artificial Intelligence",
      issuer: "AWS Training and Certification",
      date: "2025",
      credentialId: "ce2ac2af-fa27-4238-81d4-ec70b7fae214",
      link: "fundamentalsai.pdf",
      description: "Completed AWS's introductory course on Machine Learning and Artificial Intelligence, covering core concepts, tools, and real-world applications.",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "AWS Training and Certification",
      date: "2025",
      credentialId: "b717c557-dd5b-4a52-8e1f-4ea5a435305b",
      link: "generativeai.pdf",
      description: "Explored the fundamentals and real-world applications of generative AI technologies, including text, image, and code generation.",
    },
    {
      title: "Data Analysis with Python",
      issuer: "freecodeCamp",
      date: "2025",
      credentialId: "crmljsh-dawp",
      link: "https://www.freecodecamp.org/certification/crmljsh/data-analysis-with-python-v7",
      description: "Gained hands-on experience in data manipulation, analysis, and visualization using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn through real-world projects.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="">Home</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary">
                Projects
              </Link>
              <Link href="#certificates" className="text-sm font-medium hover:text-primary">
                Certificates
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Cromuel Josh
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Computer Engineering graduate passionate about building systems and software that bring change.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/crmljsh" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/crmljsh" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                A Computer Engineering graduate with hands-on experience in network operations, technical support, and hardware systems.
              </p>
              <p className="text-muted-foreground">
                Skilled in identifying performance issues, optimizing systems, and applying data-driven solutions to improve efficiency.
                Passionate about providing the best of my services.
              </p>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/profile.jpg?height=300&width=300"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">{cert.issuer}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={cert.link} target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Verify
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 bg-muted/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in new opportunities and exciting projects. Let's discuss how I can apply my skills in delivering impactful real-world solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:cromueljoshvictoriano@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/crmljsh/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Cromuel Josh. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/crmljsh" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/crmljsh/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
