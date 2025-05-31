"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface PricingItem {
  service: string
  price: number
}

const PricingList: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [discountedTotal, setDiscountedTotal] = useState(0)

  const DISCOUNT_PERCENTAGE = 7.5

  const pricingItems: PricingItem[] = [
    { service: "Design", price: 15000 },
    { service: "Development", price: 36000 },
    { service: "Project Management", price: 7500 },
    { service: "Project Setup", price: 500 },
    { service: "Technical SEO", price: 2500 },
    { service: "Content Entry (all languages, content provided by client)", price: 5000 },
    { service: "Quality Control", price: 3000 },
    { service: "Technical Documentation", price: 1500 },
    { service: "Transfer of all Blog posts from current site", price: 2000 },
  ]

  useEffect(() => {
    const newTotal = pricingItems.reduce((sum, item) => sum + item.price, 0)
    const newDiscountAmount = (newTotal * DISCOUNT_PERCENTAGE) / 100
    const newDiscountedTotal = newTotal - newDiscountAmount
    setTotal(newTotal)
    setDiscountAmount(newDiscountAmount)
    setDiscountedTotal(newDiscountedTotal)
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="py-3 px-4 text-left font-semibold w-2/3">Service</th>
            <th className="py-3 px-4 text-left font-semibold w-1/3">Price (EUR)</th>
          </tr>
        </thead>
        <tbody>
          {pricingItems.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="py-3 px-4 border-t">{item.service}</td>
              <td className="py-3 px-4 border-t">{item.price.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="bg-secondary text-secondary-foreground font-bold">
            <td className="py-3 px-4">TOTAL</td>
            <td className="py-3 px-4">{total.toLocaleString()}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="py-3 px-4">Discount ({DISCOUNT_PERCENTAGE}%)</td>
            <td className="py-3 px-4">-{discountAmount.toLocaleString()}</td>
          </tr>
          <tr className="bg-green-200 font-bold">
            <td className="py-3 px-4">TOTAL WITH DISCOUNT</td>
            <td className="py-3 px-4">{discountedTotal.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 text-sm text-gray-600">
        <p>*Additional requests - €45 / working hour</p>
      </div>
    </div>
  )
}

export default PricingList
