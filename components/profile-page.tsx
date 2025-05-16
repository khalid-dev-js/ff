"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"
import me from "../app/sr/me.jpg"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Award, Star, DollarSign, Clock } from "lucide-react"
import WithdrawModal from "@/components/withdraw-modal"
import SuccessModal from "@/components/success-modal"
import Navbar from "@/components/navbar"

export default function ProfilePage() {
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const totalEarnings = 4000
  const remainingBalance = 2500
  const exchangeRate = 278.5 // USD to PKR exchange rate

  const formattedEarnings =
    currency === "USD" ? `$${totalEarnings.toLocaleString()}` : `PKR ${(totalEarnings * exchangeRate).toLocaleString()}`

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const changeCurrency = (newCurrency: "USD" | "PKR") => {
    setCurrency(newCurrency)
    setIsDropdownOpen(false)
  }

  const openWithdrawModal = () => {
    setIsWithdrawModalOpen(true)
  }

  const handleWithdrawSuccess = () => {
    setIsWithdrawModalOpen(false)
    setIsSuccessModalOpen(true)

    // Auto-close success modal after 3 seconds
    setTimeout(() => {
      setIsSuccessModalOpen(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container max-w-8xl  mx-auto py-8 px-4">
        <Card className="overflow-hidden">
          <div className="bg-emerald-600 h-32 relative"></div>

          <div className="px-6 pb-6 mt-[5rem]">
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="relative -top-16 md:-top-12">
                <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32 bg-white shadow-md">
                  <Image
                    src={me}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 mt-2 md:-mt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                      John Developer
                      <Badge className="bg-emerald-500 hover:bg-emerald-600 ml-2 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Top Rated
                      </Badge>
                    </h1>
                    <p className="text-gray-600 mt-1">Top Rated Web Developer</p>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="font-medium ml-1">5.0</span>
                    <span className="text-gray-500 ml-1">(127)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["JavaScript", "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="mt-8">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent px-4 py-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="gigs"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent px-4 py-2"
                >
                  Gigs
                </TabsTrigger>
                <TabsTrigger
                  value="testimonials"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent px-4 py-2"
                >
                  Client Testimonials
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent px-4 py-2 flex items-center gap-2"
                >
                  Current Orders
                  <Badge className="bg-emerald-500 hover:bg-emerald-500">4</Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="payments"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent px-4 py-2"
                >
                  Payments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold mb-4">About Me</h2>
                      <p className="text-gray-600">
                        I'm a passionate web developer with over 5 years of experience creating modern, responsive
                        websites and web applications. I specialize in React, Next.js, and TypeScript, delivering
                        high-quality solutions that meet client needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">Website Redesign</p>
                            <p className="text-sm text-gray-500">Completed on May 10, 2024</p>
                          </div>
                          <span className="font-bold">$850</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">E-commerce Development</p>
                            <p className="text-sm text-gray-500">Completed on Apr 28, 2024</p>
                          </div>
                          <span className="font-bold">$1,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Landing Page</p>
                            <p className="text-sm text-gray-500">Completed on Apr 15, 2024</p>
                          </div>
                          <span className="font-bold">$450</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="gigs" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((gig) => (
                    <Card key={gig} className="overflow-hidden">
                      <div className="h-40 bg-gray-200 relative">
                        <Image
                          src={`/placeholder.svg?height=160&width=320&text=Gig+${gig}`}
                          alt={`Gig ${gig}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {gig === 1 && "I will create a modern React website"}
                          {gig === 2 && "I will develop a Next.js application"}
                          {gig === 3 && "I will build a responsive landing page"}
                          {gig === 4 && "I will fix your website bugs"}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>5.0</span>
                          <span className="mx-1">•</span>
                          <span>{gig * 7 + 10} Reviews</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-500">Starting at</span>
                          <span className="font-bold">${gig * 100 + 50}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="testimonials" className="mt-0">
                <div className="space-y-4">
                  {[1, 2, 3].map((testimonial) => (
                    <Card key={testimonial}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40&text=C${testimonial}`}
                              alt="Client"
                            />
                            <AvatarFallback>C{testimonial}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">
                                  {testimonial === 1 && "Sarah Johnson"}
                                  {testimonial === 2 && "Michael Chen"}
                                  {testimonial === 3 && "Emma Rodriguez"}
                                </h3>
                                <div className="flex items-center mt-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">
                                {testimonial === 1 && "May 2, 2024"}
                                {testimonial === 2 && "Apr 18, 2024"}
                                {testimonial === 3 && "Mar 30, 2024"}
                              </span>
                            </div>
                            <p className="mt-3 text-gray-700">
                              {testimonial === 1 &&
                                "John delivered exceptional work on our website redesign. He understood our requirements perfectly and implemented everything with great attention to detail. The communication was excellent throughout the project."}
                              {testimonial === 2 &&
                                "Working with John was a pleasure. He's highly skilled and delivered our e-commerce site ahead of schedule. His expertise in React and Next.js was evident in the smooth performance of our website."}
                              {testimonial === 3 &&
                                "I'm extremely satisfied with the landing page John created for our product launch. It looks professional, loads quickly, and has helped increase our conversion rate significantly. Will definitely work with him again!"}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="orders" className="mt-0">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((order) => (
                    <Card key={order}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-emerald-100 p-3 rounded-full">
                              <Clock className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">
                                {order === 1 && "E-commerce Dashboard"}
                                {order === 2 && "Portfolio Website"}
                                {order === 3 && "Mobile App UI Design"}
                                {order === 4 && "API Integration"}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {order === 1 && "Due in 3 days"}
                                {order === 2 && "Due in 5 days"}
                                {order === 3 && "Due in 1 week"}
                                {order === 4 && "Due tomorrow"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              In Progress
                            </Badge>
                            <span className="font-bold">${order * 200 + 150}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payments" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-emerald-500" />
                        Earnings
                      </h2>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Total Earnings</span>
                          <div className="relative">
                            <motion.button
                              className="flex items-center gap-1 font-bold text-lg"
                              onClick={toggleDropdown}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {formattedEarnings}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                              />
                            </motion.button>

                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10 border"
                                >
                                  <div className="py-1">
                                    <button
                                      className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${currency === "USD" ? "font-bold bg-gray-50" : ""}`}
                                      onClick={() => changeCurrency("USD")}
                                    >
                                      USD ($)
                                    </button>
                                    <button
                                      className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${currency === "PKR" ? "font-bold bg-gray-50" : ""}`}
                                      onClick={() => changeCurrency("PKR")}
                                    >
                                      PKR (₨)
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Available for Withdrawal</span>
                          <span className="font-bold">
                            {currency === "USD"
                              ? `$${remainingBalance.toLocaleString()}`
                              : `PKR ${(remainingBalance * exchangeRate).toLocaleString()}`}
                          </span>
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700"
                            onClick={openWithdrawModal}
                          >
                            Withdraw to Bank
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold mb-4">Payment History</h2>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">Withdrawal to Bank</p>
                            <p className="text-sm text-gray-500">May 1, 2024</p>
                          </div>
                          <span className="font-bold text-red-500">-$1,500</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">Website Redesign</p>
                            <p className="text-sm text-gray-500">Apr 28, 2024</p>
                          </div>
                          <span className="font-bold text-emerald-500">+$850</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b">
                          <div>
                            <p className="font-medium">E-commerce Development</p>
                            <p className="text-sm text-gray-500">Apr 15, 2024</p>
                          </div>
                          <span className="font-bold text-emerald-500">+$1,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Withdrawal to Bank</p>
                            <p className="text-sm text-gray-500">Mar 30, 2024</p>
                          </div>
                          <span className="font-bold text-red-500">-$2,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>

      <AnimatePresence>
        {isWithdrawModalOpen && (
          <WithdrawModal
            onClose={() => setIsWithdrawModalOpen(false)}
            onSuccess={handleWithdrawSuccess}
            remainingBalance={remainingBalance}
            currency={currency}
            exchangeRate={exchangeRate}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSuccessModalOpen && <SuccessModal onClose={() => setIsSuccessModalOpen(false)} />}
      </AnimatePresence>
    </div>
  )
}
