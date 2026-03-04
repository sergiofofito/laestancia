"use client"

import { useState, useEffect } from "react"
import { X, Gift, Sparkles, ChevronRight } from "lucide-react"

export function LeadCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  useEffect(() => {
    const dismissed = localStorage.getItem("la-estancia-popup-dismissed")
    if (dismissed) return

    const timer = setTimeout(() => setIsVisible(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      localStorage.setItem("la-estancia-popup-dismissed", "true")
    }, 400)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    } catch (err) {
      console.error("Lead capture failed:", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
      localStorage.setItem("la-estancia-popup-dismissed", "true")
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed z-[101] inset-0 flex items-center justify-center px-4 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl
            transition-all duration-400
            ${isClosing ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"}
          `}
          style={{
            background:
              "linear-gradient(160deg, hsl(20 25% 14%) 0%, hsl(20 18% 10%) 100%)",
            border: "1px solid hsl(35 45% 40% / 0.4)",
            boxShadow:
              "0 32px 80px -12px rgba(0,0,0,0.8), 0 0 0 1px hsl(200 80% 65% / 0.1), inset 0 1px 0 hsl(200 80% 65% / 0.15)",
          }}
        >
          {/* Top decorative bar */}
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(35 45% 50%) 0%, hsl(200 85% 65%) 50%, hsl(35 45% 50%) 100%)",
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="px-8 pt-8 pb-10">
            {!submitted ? (
              <>
                {/* Icon badge */}
                <div className="flex justify-center mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200 80% 65% / 0.25) 0%, hsl(35 45% 50% / 0.25) 100%)",
                      border: "1px solid hsl(200 80% 65% / 0.3)",
                      boxShadow: "0 8px 24px -4px hsl(200 80% 65% / 0.2)",
                    }}
                  >
                    <Gift className="w-7 h-7 text-blue-300" />
                  </div>
                </div>

                {/* Headline */}
                <div className="text-center mb-7">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-medium tracking-widest uppercase"
                    style={{
                      background: "hsl(200 80% 65% / 0.12)",
                      border: "1px solid hsl(200 80% 65% / 0.25)",
                      color: "hsl(200 90% 75%)",
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Exclusive Insider Access
                  </div>

                  <h2
                    className="font-playfair text-3xl font-bold mb-3 leading-tight"
                    style={{ color: "hsl(40 20% 92%)" }}
                  >
                    Unlock{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(200 90% 75%) 0%, hsl(35 60% 65%) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Members-Only
                    </span>{" "}
                    Deals
                  </h2>

                  <p
                    className="font-inter text-sm leading-relaxed"
                    style={{ color: "hsl(40 15% 65%)" }}
                  >
                    Join the La Estancia inner circle — get exclusive discounts,
                    early access to special events, and curated offers delivered
                    straight to you.
                  </p>
                </div>

                {/* Value props */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {[
                    { emoji: "🥩", label: "Priority reservations" },
                    { emoji: "🍷", label: "Wine & dining specials" },
                    { emoji: "🎉", label: "Event early access" },
                  ].map(({ emoji, label }) => (
                    <div
                      key={label}
                      className="rounded-xl p-3 text-center"
                      style={{
                        background: "hsl(20 20% 18% / 0.8)",
                        border: "1px solid hsl(30 20% 28% / 0.6)",
                      }}
                    >
                      <div className="text-xl mb-1">{emoji}</div>
                      <p
                        className="font-inter text-[10px] leading-tight"
                        style={{ color: "hsl(40 15% 60%)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {[
                    { name: "name", type: "text", placeholder: "Your name", autoComplete: "name" },
                    { name: "email", type: "email", placeholder: "Email address", autoComplete: "email" },
                    { name: "phone", type: "tel", placeholder: "Phone number (optional)", autoComplete: "tel" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required={field.name !== "phone"}
                      className="w-full px-4 py-3 rounded-xl font-inter text-sm outline-none transition-all duration-200 placeholder:opacity-40"
                      style={{
                        background: "hsl(20 20% 16%)",
                        border: "1px solid hsl(30 20% 28%)",
                        color: "hsl(40 20% 90%)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid hsl(200 80% 65% / 0.6)"
                        e.currentTarget.style.boxShadow = "0 0 0 3px hsl(200 80% 65% / 0.1)"
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid hsl(30 20% 28%)"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    />
                  ))}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-inter font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200 80% 55%) 0%, hsl(200 80% 65%) 100%)",
                      color: "#fff",
                      boxShadow: "0 8px 20px -4px hsl(200 80% 60% / 0.45)",
                    }}
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block" />
                    ) : (
                      <>
                        Claim My Exclusive Access
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p
                  className="font-inter text-[10px] text-center mt-4"
                  style={{ color: "hsl(40 15% 45%)" }}
                >
                  No spam, ever. Unsubscribe anytime. We respect your privacy.
                </p>
              </>
            ) : (
              /* Success state */
              <div className="text-center py-6">
                <div className="flex justify-center mb-5">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200 80% 65% / 0.2) 0%, hsl(35 45% 50% / 0.2) 100%)",
                      border: "1px solid hsl(200 80% 65% / 0.3)",
                    }}
                  >
                    🥂
                  </div>
                </div>
                <h2
                  className="font-playfair text-3xl font-bold mb-3"
                  style={{ color: "hsl(40 20% 92%)" }}
                >
                  Welcome to the{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200 90% 75%) 0%, hsl(35 60% 65%) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Inner Circle
                  </span>
                </h2>
                <p
                  className="font-inter text-sm leading-relaxed mb-6"
                  style={{ color: "hsl(40 15% 65%)" }}
                >
                  {form.name ? `${form.name}, you're` : "You're"} officially on the list. Expect
                  exclusive deals, priority booking, and curated invitations from
                  La Estancia straight to your inbox.
                </p>
                <button
                  onClick={handleClose}
                  className="font-inter text-sm font-medium px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "hsl(20 20% 22%)",
                    color: "hsl(40 20% 80%)",
                    border: "1px solid hsl(30 20% 32%)",
                  }}
                >
                  Take me to the site
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
