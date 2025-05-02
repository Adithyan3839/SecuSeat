import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Shield, Ticket, RefreshCw } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reimagining Ticketing with Blockchain
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-white/80 md:text-xl">
                NFT-based tickets. Verified ownership. No fraud.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#early-access">Get Early Access</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="SecuSeat Platform"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SecuSeat Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About SecuSeat</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SecuSeat is revolutionizing the ticketing industry with blockchain technology, providing a secure and
                transparent platform for event organizers and attendees.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="SecuSeat Vision"
              width={400}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To eliminate ticket fraud and create a fair, transparent ticketing ecosystem that benefits both
                      event organizers and attendees.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      A world where every ticket is verifiable, transferable, and secure, putting an end to counterfeit
                      tickets and scalping.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p className="text-muted-foreground">Transparency, security, and fairness in every transaction.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our blockchain-based ticketing system ensures security and authenticity at every step.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-4 gap-8 py-12">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Ticket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Buy NFT Ticket</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Purchase your ticket as a unique NFT with built-in authenticity verification.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Store in Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Keep your ticket secure in your digital wallet until the event.</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Verify at Event</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Instant verification at the venue with tamper-proof blockchain technology.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 mx-auto">
                  <RefreshCw className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Resell Securely</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transfer or resell your ticket with smart contract rules set by the organizer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SecuSeat offers a range of features designed to revolutionize the ticketing experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Fraud Elimination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NFT-based tickets are impossible to counterfeit, ensuring every ticket is authentic.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Controlled Resale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Smart contracts allow organizers to set resale rules, including price caps.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Royalties on Resales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Event organizers earn a percentage of each resale transaction automatically.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparent Ownership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete ownership history is visible on the blockchain, ensuring legitimacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our early adopters have to say about SecuSeat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User Avatar"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="space-y-2 text-center">
                    <p className="text-muted-foreground italic">
                      "SecuSeat has completely transformed how we handle ticket sales. No more worries about fraud!"
                    </p>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User Avatar"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="space-y-2 text-center">
                    <p className="text-muted-foreground italic">
                      "As a frequent concert-goer, I love the peace of mind knowing my ticket is 100% legitimate."
                    </p>
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Music Fan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User Avatar"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="space-y-2 text-center">
                    <p className="text-muted-foreground italic">
                      "The ability to earn royalties on secondary sales has been a game-changer for our venue."
                    </p>
                    <h3 className="font-medium">David Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Venue Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Early Access</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be among the first to experience the future of ticketing with SecuSeat.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50"
                />
                <Button type="submit" className="bg-teal hover:bg-teal/80">
                  Join Waitlist
                </Button>
              </form>
              <p className="text-xs text-white/60">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
