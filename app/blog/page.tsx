import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Ticketing: How Blockchain is Changing the Game",
    excerpt:
      "Explore how blockchain technology is revolutionizing the ticketing industry by eliminating fraud and creating new opportunities for event organizers.",
    date: "April 15, 2023",
    author: "Alex Thompson",
    category: "Web3",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-ticketing",
  },
  {
    id: 2,
    title: "NFTs Explained: More Than Just Digital Art",
    excerpt:
      "A comprehensive guide to understanding NFTs and their applications beyond digital art, including event ticketing and membership passes.",
    date: "May 2, 2023",
    author: "Maya Rodriguez",
    category: "Web3",
    image: "/placeholder.svg?height=200&width=400",
    slug: "nfts-explained",
  },
  {
    id: 3,
    title: "How Smart Contracts Are Eliminating Ticket Scalping",
    excerpt:
      "Learn how smart contracts are being used to enforce price caps and royalty payments in the secondary ticket market.",
    date: "June 10, 2023",
    author: "James Wilson",
    category: "Events",
    image: "/placeholder.svg?height=200&width=400",
    slug: "smart-contracts-ticket-scalping",
  },
  {
    id: 4,
    title: "The Environmental Impact of Blockchain Ticketing",
    excerpt:
      "An analysis of the environmental considerations of blockchain technology and how SecuSeat is working to minimize its carbon footprint.",
    date: "July 5, 2023",
    author: "Sarah Johnson",
    category: "Behind the Scenes",
    image: "/placeholder.svg?height=200&width=400",
    slug: "environmental-impact",
  },
  {
    id: 5,
    title: "Case Study: How Metro Music Festival Eliminated Ticket Fraud",
    excerpt:
      "A detailed look at how one of the largest music festivals in the country used SecuSeat to combat counterfeit tickets.",
    date: "August 12, 2023",
    author: "David Rodriguez",
    category: "Events",
    image: "/placeholder.svg?height=200&width=400",
    slug: "case-study-metro-music-festival",
  },
  {
    id: 6,
    title: "The Psychology of Digital Ownership in the Age of NFTs",
    excerpt:
      "Exploring why people value digital ownership and how this is changing consumer behavior in the ticketing industry.",
    date: "September 8, 2023",
    author: "Alex Thompson",
    category: "Web3",
    image: "/placeholder.svg?height=200&width=400",
    slug: "psychology-digital-ownership",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">SecuSeat Blog</h1>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, updates, and stories from the future of ticketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button variant="outline" className="rounded-full">
              Web3
            </Button>
            <Button variant="outline" className="rounded-full">
              Events
            </Button>
            <Button variant="outline" className="rounded-full">
              Behind the Scenes
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <Badge className="w-fit mb-2">Featured</Badge>
                <h2 className="text-2xl font-bold mb-2">
                  The Future of Ticketing: How Blockchain is Changing the Game
                </h2>
                <p className="text-muted-foreground mb-4">
                  Explore how blockchain technology is revolutionizing the ticketing industry by eliminating fraud and
                  creating new opportunities for event organizers.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-sm text-muted-foreground">April 15, 2023</div>
                  <div className="text-sm text-muted-foreground">By Alex Thompson</div>
                </div>
                <Button asChild>
                  <Link href="/blog/future-of-ticketing">Read More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>By {post.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest news, articles, and insights from SecuSeat.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 min-w-0 px-4 py-2 border rounded-md"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from SecuSeat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
