
import { Phone, Mail, MapPin, Send, Clock, Fax, Facebook, Instagram, Twitter, MessageSquare } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white">
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or need technical support? Our team is here to help.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Nairobi Office */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm animate-on-scroll">
            <h3 className="text-2xl font-bold font-heading mb-4">Nairobi Office</h3>
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <MapPin size={18} />
              </div>
              <address className="not-italic text-gray-700">
                SYNERGY LUBRICANT SOLUTIONS LTD<br />
                UNIT 3, KENROID COMPLEX, IMARA DAIMA<br />
                TELGA LORUPE ROAD OFF MOMBASA ROAD<br />
                P.O BOX 102139-00101 NAIROBI, KENYA
              </address>
            </div>
            
            <div className="flex items-start space-x-3 mb-2">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-gray-700">
                  TEL: (+254) 020 21010002<br />
                  MOBILE: (+254) 736 210 100
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 mb-2">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-gray-700">WHATSAPP: (+254) 748 200 101</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 mb-2">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-gray-700">EMAIL: info@slusollubes.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Fax size={18} />
              </div>
              <div>
                <p className="text-gray-700">FAX: (+254) 20 2101003</p>
              </div>
            </div>
          </div>

          {/* Mombasa Office */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm animate-on-scroll" style={{animationDelay: "0.2s"}}>
            <h3 className="text-2xl font-bold font-heading mb-4">Mombasa Office</h3>
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <MapPin size={18} />
              </div>
              <address className="not-italic text-gray-700">
                SYNERGY LUBRICANT SOLUTIONS LTD<br />
                SHIMANZI/ZANZIBAR ROAD<br />
                OPP. PANAFRICA SYNDICATE<br />
                MOMBASA
              </address>
            </div>
            
            <div className="flex items-start space-x-3 mb-2">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-gray-700">MOBILE: (+254) 773 394 555</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-gray-700">
                  EMAIL: depot.msa@slusollubes.com<br />
                  sales.msa@slusollubes.com
                </p>
              </div>
            </div>
          </div>

          {/* Kisumu Office */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm animate-on-scroll" style={{animationDelay: "0.4s"}}>
            <h3 className="text-2xl font-bold font-heading mb-4">Kisumu Office</h3>
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <MapPin size={18} />
              </div>
              <address className="not-italic text-gray-700">
                SYNERGY LUBRICANT SOLUTIONS LTD<br />
                C/O NYANZA ENTERPRISES LTD<br />
                OGINGA ODINGA STREET<br />
                KISUMU
              </address>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange mt-1">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-gray-700">
                  MOBILE: (+254) 73 363 7111<br />
                  (+254) 57 2021300
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Business Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll" id="contact-form">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold font-heading mb-6">Send us a Message</h3>
              
              {formSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slusollubes-orange"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slusollubes-orange"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slusollubes-orange"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slusollubes-orange"
                      required
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Support">Product Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Distributor Inquiry">Distributor Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slusollubes-orange"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
                
                <p className="text-gray-600 mt-3 text-center text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
          
          {/* Business Hours and Social Media */}
          <div className="lg:col-span-1 space-y-8">
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-slusollubes-orange/10 p-2 rounded-full text-slusollubes-orange">
                  <Clock size={20} />
                </div>
                <h3 className="text-2xl font-bold font-heading">Business Hours</h3>
              </div>
              
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll" style={{animationDelay: "0.3s"}}>
              <h3 className="text-2xl font-bold font-heading mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1877F2]/10 p-2 rounded-full text-[#1877F2]">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <a 
                      href="https://www.facebook.com/slusollubes/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-slusollubes-orange block"
                    >
                      Synergy Lubricant Solutions
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61563285217555" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-slusollubes-orange block"
                    >
                      Coast Region
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61563764793989" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-slusollubes-orange block"
                    >
                      Western Kenya
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61563815402398" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-slusollubes-orange block"
                    >
                      North Rift / South Rift
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#E4405F]/10 p-2 rounded-full text-[#E4405F]">
                    <Instagram size={20} />
                  </div>
                  <a 
                    href="https://www.instagram.com/slusollubes/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-slusollubes-orange"
                  >
                    @slusollubes
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#1DA1F2]/10 p-2 rounded-full text-[#1DA1F2]">
                    <Twitter size={20} />
                  </div>
                  <a 
                    href="https://x.com/slusollubes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-slusollubes-orange"
                  >
                    @slusollubes
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#25D366]/10 p-2 rounded-full text-[#25D366]">
                    <MessageSquare size={20} />
                  </div>
                  <a 
                    href="https://wa.me/254748200101" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-slusollubes-orange"
                  >
                    +254 748 200 101
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
