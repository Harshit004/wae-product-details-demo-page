"use client"

import { useState } from "react"
import { Download, ChevronDown, ChevronUp, X } from "lucide-react"

export default function DownloadsSection() {
  const [isOpen, setIsOpen] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
  
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setEmail("");
  
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1500);
  };
  

  return (
    <div>
      {/* Header with downloads title and toggle */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="mb-[60px] text-[48px] font-normal uppercase">DOWNLOADS</h2>
        {isOpen ? <ChevronUp className="w-6 h-6 text-black" /> : <ChevronDown className="w-6 h-6 text-black" />}
      </div>

      {isOpen && (
        <div className="mt-8 max-w-xl transition-all duration-300 ease-in-out">
          {/* Download button that opens modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-4 border rounded-[8px] w-[269px] h-[54px] pt-4 pr-8 pb-4 pl-8 mb-0 hover:bg-black hover:text-white transition-colors"
          >
            Download Brochure <Download className="w-5 h-5" />
          </button>

          {/* Gap of 24px then text */}
          <p className="mt-[24px] mb-4 text-[18px] text-gray-500">
            Enter your email address to receive the brochure directly in your inbox.
          </p>
        </div>
      )}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-[8px] shadow-lg w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold uppercase">Enter Your Email</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-300 px-3 py-2 w-full mb-4 rounded-[8px]"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 w-full rounded-[8px]"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Brochure"}
              </button>
            </form>
            {isSent && <p className="text-green-600 mt-2">Check your inbox! We've sent you the brochure.</p>}
          </div>
        </div>
      )}
    </div>
  )
}