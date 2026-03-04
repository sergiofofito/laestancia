"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight } from "lucide-react"

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
    }, 350)
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
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(6px)",
          transition: "opacity 350ms ease",
          opacity: isClosing ? 0 : 1,
        }}
      />

      {/* Modal container */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            position: "relative",
            width: "100%",
            maxWidth: "460px",
            background: "#0c0a09",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)",
            transition: "opacity 350ms ease, transform 350ms ease",
            opacity: isClosing ? 0 : 1,
            transform: isClosing ? "translateY(12px) scale(0.97)" : "translateY(0) scale(1)",
          }}
        >
          {/* Gold top accent line */}
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, hsl(35 55% 52%) 30%, hsl(40 60% 60%) 50%, hsl(35 55% 52%) 70%, transparent 100%)",
          }} />

          {/* Close */}
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              width: "2rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.3)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 200ms ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            <X size={15} strokeWidth={1.5} />
          </button>

          <div style={{ padding: "2.5rem 2.5rem 2.75rem" }}>
            {!submitted ? (
              <>
                {/* Eyebrow */}
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "hsl(35 55% 52%)",
                  marginBottom: "1rem",
                }}>
                  La Estancia — Members Only
                </p>

                {/* Headline */}
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 4vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "hsl(40 20% 93%)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}>
                  Exceptional dining,<br />
                  <em style={{ fontStyle: "italic", color: "hsl(40 20% 75%)" }}>exceptional value.</em>
                </h2>

                {/* Sub-copy */}
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.42)",
                  marginBottom: "1.75rem",
                }}>
                  Join our guest list for priority reservations, exclusive offers,
                  and early access to private events — curated for those who appreciate the finest.
                </p>

                {/* Thin divider */}
                <div style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.07)",
                  marginBottom: "1.75rem",
                }} />

                {/* Perks — inline text list */}
                <div style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}>
                  {["Priority seating", "Exclusive offers", "Private event access"].map((perk, i) => (
                    <span key={i} style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "hsl(35 55% 52%)",
                        flexShrink: 0,
                      }} />
                      {perk}
                    </span>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { name: "name",  type: "text",  placeholder: "Full name",           autoComplete: "name",  required: true  },
                    { name: "email", type: "email", placeholder: "Email address",        autoComplete: "email", required: true  },
                    { name: "phone", type: "tel",   placeholder: "Phone  (optional)",    autoComplete: "tel",   required: false },
                  ].map((field) => (
                    <div key={field.name} style={{ position: "relative" }}>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required={field.required}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid rgba(255,255,255,0.12)",
                          padding: "0.6rem 0",
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "13px",
                          color: "hsl(40 20% 90%)",
                          outline: "none",
                          boxSizing: "border-box",
                          transition: "border-color 200ms ease",
                        }}
                        onFocus={e => (e.currentTarget.style.borderBottomColor = "hsl(35 55% 52%)")}
                        onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.12)")}
                      />
                    </div>
                  ))}

                  <style>{`
                    input::placeholder { color: rgba(255,255,255,0.22); }
                    input:-webkit-autofill {
                      -webkit-box-shadow: 0 0 0 1000px #0c0a09 inset !important;
                      -webkit-text-fill-color: hsl(40 20% 90%) !important;
                    }
                  `}</style>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: "0.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      width: "100%",
                      padding: "0.9rem 1.5rem",
                      background: "hsl(35 55% 52%)",
                      color: "#0c0a09",
                      border: "none",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.6 : 1,
                      transition: "background 200ms ease, opacity 200ms ease",
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "hsl(35 60% 58%)" }}
                    onMouseLeave={e => { e.currentTarget.style.background = "hsl(35 55% 52%)" }}
                  >
                    {loading ? (
                      <span style={{
                        width: "14px", height: "14px",
                        border: "2px solid rgba(0,0,0,0.2)",
                        borderTopColor: "#0c0a09",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }} />
                    ) : (
                      <>
                        Request Access
                        <ChevronRight size={13} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </form>

                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.2)",
                  textAlign: "center",
                  marginTop: "1.25rem",
                  letterSpacing: "0.03em",
                }}>
                  Your information is never shared. Unsubscribe at any time.
                </p>
              </>
            ) : (
              /* ── Success state ── */
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                {/* Thin ornamental line */}
                <div style={{
                  width: "40px",
                  height: "1px",
                  background: "hsl(35 55% 52%)",
                  margin: "0 auto 1.75rem",
                }} />

                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "hsl(40 20% 93%)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}>
                  {form.name ? `Welcome, ${form.name}.` : "You're on the list."}
                </h2>

                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.42)",
                  marginBottom: "2rem",
                  maxWidth: "300px",
                  margin: "0 auto 2rem",
                }}>
                  Expect priority access, curated offers, and exclusive invitations
                  from La Estancia — arriving shortly.
                </p>

                <button
                  onClick={handleClose}
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "0.7rem 2rem",
                    cursor: "pointer",
                    transition: "color 200ms ease, border-color 200ms ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.35)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                  }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
