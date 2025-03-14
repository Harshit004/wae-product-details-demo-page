"use client"
import { useState, CSSProperties } from "react"
import { ChevronRight } from "lucide-react"

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    let newErrors: Record<string, string> = {}

    if (!data.name) newErrors.name = "Name is required"
    if (!data.email) newErrors.email = "Email is required"
    if (!data.contact) newErrors.contact = "Contact No. is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", data)
      // Add your form submission logic here
    }
  }

  // Updated inline style for the input elements
  const inputStyle: CSSProperties = {
    fontFamily: "Helvetica Neue",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "100%",
    letterSpacing: "0.08em", // using a valid length value instead of "8%"
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        style={inputStyle}
        className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none mb-10 placeholder-[#00000033]"
        required
      />
      {errors.name && <p className="mb-2 text-red-500">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        style={inputStyle}
        className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none mb-10 placeholder-[#00000033]"
        required
      />
      {errors.email && <p className="mb-2 text-red-500">{errors.email}</p>}

      <input
        type="tel"
        name="contact"
        placeholder="Contact No."
        style={inputStyle}
        className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none mb-10 placeholder-[#00000033]"
        required
      />
      {errors.contact && <p className="mb-2 text-red-500">{errors.contact}</p>}

      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        style={inputStyle}
        className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none mb-10 placeholder-[#00000033]"
      />

        <button
            type="submit"
            className="bg-black text-white border border-transparent px-6 py-3 flex items-center gap-2 w-full 
            justify-center rounded-xl mt-6 hover:bg-white hover:text-black hover:border-black">
            <span>Contact Us</span>
            <ChevronRight className="inline-block h-5 w-5" stroke="currentColor" />
        </button>

    </form>
  )
}
