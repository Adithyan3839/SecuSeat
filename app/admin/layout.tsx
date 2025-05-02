import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="bg-navy text-white p-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-xl font-bold">SecuSeat Admin</h1>
          <div className="flex space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/admin">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin/team">Team</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Back to Site</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container py-8">{children}</div>
    </div>
  )
}
