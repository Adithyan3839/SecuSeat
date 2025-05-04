import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Shield, Ticket, RefreshCw } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How SecuSeat Works</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A step-by-step guide to our blockchain-based ticketing platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Blockchain Ticketing Explained</h2>
              <p className="text-muted-foreground">
                SecuSeat uses blockchain technology to create a secure, transparent ticketing ecosystem. Each ticket is
                minted as a unique NFT (Non-Fungible Token) on the blockchain, providing verifiable proof of
                authenticity and ownership.
              </p>
              <p className="text-muted-foreground">
                Unlike traditional tickets, NFT tickets cannot be counterfeited or duplicated. The entire history of the
                ticket—from initial sale to transfers between users—is recorded on the blockchain, creating an immutable
                record of ownership.
              </p>
              <p className="text-muted-foreground">
                Smart contracts (self-executing code on the blockchain) govern the rules for ticket transfers and
                resales, allowing event organizers to maintain control over their tickets even in the secondary market.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="https://i.ibb.co/JWLtff0s/3.png?height=400&width=400"
                alt="Blockchain Ticketing"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The SecuSeat Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From purchase to event entry, here's how SecuSeat works.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            {/* Step 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="mx-auto lg:ml-auto order-2 lg:order-1">
                <div className="p-4 rounded-full bg-primary/10 mb-4 mx-auto inline-flex">
                  <Ticket className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">1. Buy NFT Ticket</h3>
                <p className="text-muted-foreground">
                  Purchase your ticket through the SecuSeat platform or an authorized partner. Each ticket is minted as
                  a unique NFT on the blockchain at the time of purchase.
                </p>
                <p className="text-muted-foreground">
                  You'll need a digital wallet to store your NFT ticket. Don't worry—we'll guide you through setting one
                  up if you don't already have one.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">2. Store in Wallet</h3>
                <p className="text-muted-foreground">
                  Your NFT ticket is securely stored in your digital wallet until the event. You can view your ticket at
                  any time through the SecuSeat app or your wallet application.
                </p>
                <p className="text-muted-foreground">
                  Each ticket contains embedded metadata including the event details, seat information, and a unique
                  identifier that links to your identity.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="p-4 rounded-full bg-primary/10 mb-4 mx-auto inline-flex">
                  <Wallet className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="mx-auto lg:ml-auto order-2 lg:order-1">
                <div className="p-4 rounded-full bg-primary/10 mb-4 mx-auto inline-flex">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">3. Verify at Event</h3>
                <p className="text-muted-foreground">
                  When you arrive at the event, present your NFT ticket through the SecuSeat app. The venue will scan
                  the ticket to verify its authenticity and your identity.
                </p>
                <p className="text-muted-foreground">
                  Our verification process checks the blockchain in real-time to confirm you are the rightful owner of
                  the ticket, eliminating the possibility of duplicates or counterfeits.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">4. Resell Securely</h3>
                <p className="text-muted-foreground">
                  If you can't attend the event, you can resell your ticket through the SecuSeat marketplace. The smart
                  contract governing your ticket enforces the rules set by the event organizer.
                </p>
                <p className="text-muted-foreground">
                  These rules might include price caps to prevent scalping, royalties that go back to the organizer on
                  each resale, or restrictions on when tickets can be transferred.
                </p>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="p-4 rounded-full bg-primary/10 mb-4 mx-auto inline-flex">
                  <RefreshCw className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Behind SecuSeat */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Technology</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A closer look at the blockchain technology powering SecuSeat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card>
              <CardHeader>
                <CardTitle>NFT Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Non-Fungible Tokens (NFTs) are unique digital assets stored on a blockchain. Each SecuSeat ticket is a
                  unique NFT with embedded metadata about the event, seat, and owner.
                </p>
                <p className="text-muted-foreground mt-4">
                  Unlike fungible tokens (like cryptocurrencies), NFTs cannot be exchanged on a like-for-like basis,
                  making them perfect for representing unique items like event tickets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Smart contracts are self-executing programs stored on the blockchain that run when predetermined
                  conditions are met. They automate and enforce the rules governing ticket sales and transfers.
                </p>
                <p className="text-muted-foreground mt-4">
                  For example, a smart contract can automatically enforce a price cap on resales or ensure that the
                  original event organizer receives a percentage of each secondary sale.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The blockchain provides a tamper-proof, distributed ledger that records every transaction. This
                  creates a verifiable chain of ownership for each ticket from the moment it's created.
                </p>
                <p className="text-muted-foreground mt-4">
                  When a ticket is scanned at an event, our system checks the blockchain to confirm the ticket is
                  authentic and that the person presenting it is the current owner.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Digital Wallets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Digital wallets store the private keys needed to access and manage your NFT tickets. They serve as
                  your digital ticket holder and proof of ownership.
                </p>
                <p className="text-muted-foreground mt-4">
                  SecuSeat integrates with popular wallet providers and also offers our own user-friendly wallet
                  solution for those new to blockchain technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about SecuSeat's blockchain ticketing system.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Do I need to understand blockchain to use SecuSeat?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not at all! We've designed SecuSeat to be user-friendly for everyone, regardless of technical
                  knowledge. The blockchain technology works behind the scenes, while you enjoy a seamless ticketing
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if I lose access to my digital wallet?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SecuSeat provides recovery options for users who lose access to their wallets. We recommend setting up
                  these recovery methods when you first create your account to ensure you never lose access to your
                  tickets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I transfer my ticket to a friend?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can transfer your ticket to another user through the SecuSeat platform, as long as the event
                  organizer allows transfers. The transfer will be recorded on the blockchain, maintaining the chain of
                  ownership.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens to my NFT ticket after the event?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your NFT ticket remains in your wallet after the event as a digital collectible and proof of
                  attendance. Some event organizers may offer special benefits to ticket holders even after the event
                  has concluded.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Experience SecuSeat?</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our early access program and be among the first to use our blockchain ticketing platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="bg-teal hover:bg-teal/80">
                <Link href="/#early-access">Get Early Access</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/for-organizers">For Event Organizers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
