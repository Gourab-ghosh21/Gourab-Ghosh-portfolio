import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackState, setFeedbackState] = useState<{
    open: boolean;
    success: boolean;
    title: string;
    message: string;
  }>({
    open: false,
    success: false,
    title: '',
    message: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const apiUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
    const endpoint = apiUrl ? `${apiUrl}/api/contact` : '/api/contact';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success === true) {
        setFeedbackState({
          open: true,
          success: true,
          title: 'Message Sent Successfully! 🚀',
          message: 'Thank you for reaching out. Your message has been received and Gourab will get back to you shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorMsg =
          data.message ||
          (data.errors && data.errors[0]?.message) ||
          'Unable to send your message. Please try again or reach out directly.';
        setFeedbackState({
          open: true,
          success: false,
          title: 'Unable to send message',
          message: errorMsg,
        });
      }
    } catch (error) {
      setFeedbackState({
        open: true,
        success: false,
        title: 'Unable to send message',
        message: 'Unable to send your message. Please check your connection or reach out directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0A0A0C] overflow-hidden">
      {/* Background 3D Sphere Glow Visual */}
      <div className="absolute -bottom-24 -right-24 w-[550px] h-[550px] bg-[#FF5722]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#FF5722] uppercase">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Have an idea, project, internship opportunity, or collaboration in mind? I'd be happy to connect and discuss it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:ggourab217@gmail.com"
                    className="text-base font-bold text-white hover:text-[#FF5722] transition-colors"
                  >
                    ggourab217@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Phone
                  </div>
                  <a
                    href="tel:+916289231197"
                    className="text-base font-bold text-white hover:text-[#FF5722] transition-colors"
                  >
                    +91 6289231197
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-base font-bold text-white">
                    India
                  </div>
                </div>
              </div>

              {/* Availability Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                  Open for Internships &amp; Collaborations
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6 relative"
            >
              {feedbackState.open && (
                <div className="absolute inset-0 bg-[#0A0A0C]/95 backdrop-blur-md rounded-2xl z-20 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${feedbackState.success ? 'bg-[#FF5722]/20 text-[#FF5722]' : 'bg-red-500/20 text-red-400'}`}>
                    {feedbackState.success ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feedbackState.title}</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    {feedbackState.message}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {!feedbackState.success && (
                      <a
                        href={`mailto:ggourab217@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                        className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Open Mail Client
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setFeedbackState({ ...feedbackState, open: false })}
                      className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Visitor Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project / Opportunity Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5722] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#FF5722]/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
