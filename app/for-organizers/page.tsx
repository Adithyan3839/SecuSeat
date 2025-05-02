import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function ForOrganizersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">For Event Organizers</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take control of your tickets with blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Benefits for Organizers</h2>
              <p className="text-muted-foreground">
                SecuSeat empowers event organizers with unprecedented control over their tickets, even after they've
                been sold. Our blockchain-based platform offers solutions to the biggest challenges facing the ticketing
                industry today.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Eliminate counterfeit tickets and fraud</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Control secondary market pricing to prevent scalping</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Earn royalties on secondary market sales</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Access real-time data on ticket ownership and transfers</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Create new revenue streams through NFT collectibles</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Event Organizer Benefits"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feature Comparison</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how SecuSeat compares to traditional ticketing platforms.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl py-12">
            <div className="rounded-lg border bg-background shadow-sm">
              <div className="grid grid-cols-4 gap-4 p-4 md:p-6">
                <div className="col-span-2 font-medium">Feature</div>
                <div className="text-center font-medium">SecuSeat</div>
                <div className="text-center font-medium">Traditional Platforms</div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Counterfeit Prevention</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Secondary Market Control</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Royalties on Resales</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Ownership Tracking</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Digital Collectibles</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-t p-4 md:p-6">
                <div className="col-span-2">Fan Engagement Features</div>
                <div className="flex justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="flex justify-center">
                  <X className="h-5 w-5 text-destructive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Organizers */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works for Organizers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting started with SecuSeat is simple.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Set Up Your Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create your event on the SecuSeat platform. Define ticket types, pricing, and seating arrangements
                  just like you would with any ticketing system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Configure Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set the rules for your tickets: maximum resale price, royalty percentages, transfer restrictions, and
                  more. Our user-friendly interface makes this simple.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Sell and Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start selling tickets through your website or our marketplace. Track sales, transfers, and secondary
                  market activity in real-time through your dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how other event organizers have benefited from SecuSeat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Metro Music Festival</CardTitle>
                <CardDescription>Annual music festival with 50,000+ attendees</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "After implementing SecuSeat, we saw a 98% reduction in counterfeit tickets and earned an additional
                  $120,000 in royalties from secondary market sales. The ability to cap resale prices meant more real
                  fans could afford tickets."
                </p>
                <p className="text-muted-foreground mt-4">- James Wilson, Festival Director</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>National Basketball League</CardTitle>
                <CardDescription>Professional sports league with 30 teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "SecuSeat has transformed our ticketing strategy. We now have complete visibility into who owns our
                  tickets and can offer targeted promotions to actual attendees. The NFT collectible aspect has also
                  created a new revenue stream."
                </p>
                <p className="text-muted-foreground mt-4">- Sarah Johnson, VP of Ticketing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transparent pricing with no hidden fees.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <div className="mt-4 text-4xl font-bold">2%</div>
                <CardDescription className="mt-2">Per primary ticket sale</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>NFT ticket minting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Basic smart contract controls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Standard support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </Card>
            <Card className="flex flex-col border-primary">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <div className="mt-4 text-4xl font-bold">3%</div>
                <CardDescription className="mt-2">Per primary ticket sale</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Advanced resale controls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>1% royalty on secondary sales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-4 text-4xl font-bold">Custom</div>
                <CardDescription className="mt-2">Tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom smart contracts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Contact Sales</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Ticketing?</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing number of event organizers using SecuSeat to take control of their tickets.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="bg-teal hover:bg-teal/80">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
