"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, MessageSquare, Heart, Menu, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import me from "../app/sr/me.jpg";
import logo from "../app/sr/logo.png"
import Image from "next/image"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="relative w-8 h-8">
<Image src={logo} alt="Logo" width={32} height={32} />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative flex-1 max-w-xl">
              <Input
                type="text"
                placeholder="Search for services..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search for services..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Notifications</span>
              <Bell className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Messages</span>
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Saved</span>
              <Heart className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Profile</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={"dd"} alt="Profile" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
