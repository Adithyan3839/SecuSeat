import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define the TeamMember type
type TeamMember = {
  id: string
  name: string
  position: string
  bio: string | null
  image_url: string | null
}

// Default team members to use when database isn't available
const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Adithyan S",
    position: "Founder & CEO",
    bio: "Passionate about blockchain technology and its potential to transform industries. Founded SecuSeat after experiencing ticket fraud firsthand.",
    image_url: "https://i.ibb.co/XZVxntNT/Formation-Apps-1699284385892.png",
  },
 
]

export default function AboutPage() {
  // Use default team members instead of trying to fetch from database
  const teamMembers = defaultTeamMembers

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About SecuSeat</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our story, mission, and vision for the future of ticketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                SecuSeat was born out of frustration. Our founder, Adithyan S, had saved for months to see his favorite
                band perform live. After purchasing tickets from what seemed like a legitimate reseller, he arrived at
                the venue only to discover his tickets were counterfeit. Thousands of fans face this same disappointment
                every day.
              </p>
              <p className="text-muted-foreground">
                This experience sparked a mission: to create a ticketing system where fraud is impossible. By leveraging
                blockchain technology and NFTs (Non-Fungible Tokens), we've built a platform that guarantees ticket
                authenticity while giving event organizers unprecedented control over their tickets.
              </p>
              <p className="text-muted-foreground">
                Founded in 2025, SecuSeat has quickly grown from a simple idea to a revolutionary platform poised to
                transform the $30 billion global ticketing industry.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="https://i.ibb.co/WNNZfm7z/Chat-GPT-Image-May-5-2025-02-12-39-AM.png"
                alt="SecuSeat Founder"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:ml-auto order-2 lg:order-1">
              <Image
                src="https://i.ibb.co/VcftvWZx/NFT.png"
                alt="SecuSeat Vision"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground">
                  To eliminate ticket fraud and create a fair, transparent ticketing ecosystem that benefits both event
                  organizers and attendees.
                </p>
                <p className="text-muted-foreground">
                  We're committed to building technology that makes events more accessible, secure, and enjoyable for
                  everyone involved.
                </p>
              </div>
              <div className="space-y-4 pt-6">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <p className="text-muted-foreground">
                  A world where every ticket is verifiable, transferable, and secure, putting an end to counterfeit
                  tickets and scalping.
                </p>
                <p className="text-muted-foreground">
                  We envision a future where blockchain technology seamlessly integrates with the event experience,
                  creating new opportunities for fan engagement and revenue streams for creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at SecuSeat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in complete visibility throughout the ticketing process, from purchase to event entry.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-muted-foreground">
                We're committed to providing the highest level of security for both ticket buyers and event organizers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fairness</h3>
              <p className="text-muted-foreground">
                We strive to create a level playing field where tickets are priced fairly and accessible to genuine
                fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind SecuSeat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center space-y-4">
                <Image
                  src={member.image_url || "/placeholder.svg?height=200&width=200"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover h-[150px] w-[150px]"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                  {member.bio && <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Journey</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of the revolution in event ticketing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="bg-teal hover:bg-teal/80">
                <Link href="/#early-access">Get Early Access</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
