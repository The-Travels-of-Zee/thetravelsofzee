"use client";
import { useState } from "react";
import { Send, Mail, User, Target, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log("Email sent successfully:", response);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        // console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const inputs = [
    {
      icon: User,
      name: "fullName",
      placeholder: "Full Name",
      required: true,
      value: formData.fullName,
      onChange: handleChange,
    },
    {
      icon: Mail,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      value: formData.email,
      onChange: handleChange,
    },
    {
      icon: Target,
      name: "subject",
      placeholder: "Email Subject",
      required: true,
      value: formData.subject,
      onChange: handleChange,
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-white to-primary/20 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md border border-orange-100"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-orange-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Thanks for Reaching Out!</h2>
          <p className="text-gray-600 leading-relaxed">
            Your message means a lot to us. Together, we can make this mission stronger — we&apos;ll be in touch soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <section
      id="contact-us"
      className="min-h-screen bg-gradient-to-br from-primary via-secondary to-purple flex items-center justify-center px-4 py-28"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-white text-primary px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-sm">
              Join Our Journey
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Let&apos;s Build Something Meaningful Together
            </h1>

            <motion.div
              className="mx-auto h-1.5 bg-gradient-to-r from-accent via-danger to-purple rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "220px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-primary-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We’re on a mission to create tools that make a difference. If our vision resonates with you, we’d love to
              hear from you.
            </motion.p>
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.25 }}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-lg px-6 py-10 md:p-12 rounded-2xl shadow-xl border border-white/20">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {inputs.map((input, index) => (
                <motion.div
                  key={input.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors z-10">
                    <input.icon size={18} />
                  </div>
                  <Input
                    type={input.type || "text"}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    required={input.required}
                    className="pl-12 pr-8 py-6 text-base bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 rounded-xl"
                  />
                  {input.required && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary text-lg">*</span>
                  )}
                </motion.div>
              ))}

              {/* Message */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute left-3 top-4 text-gray-400 group-focus-within:text-primary transition-colors z-10">
                  <MessageSquare size={18} />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your meaningful words here..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  required
                  rows={5}
                  className="pl-12 pr-16 py-3 text-base bg-gray-50 border-2 border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-gray-300 resize-none rounded-xl"
                />
                <span className="absolute right-3 top-4 text-orange-400 text-lg">*</span>
                <div className="absolute bottom-3 right-3 text-sm text-gray-400 bg-white px-2 py-1 rounded">
                  {formData.message.length}/500
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary/80 to-primary hover:bg-primary text-white font-semibold py-6 px-6 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </Button>
              </motion.div>
            </form>

            {/* Footer */}
            <motion.div
              className="mt-8 text-center text-sm text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                Believe in our mission? Let’s start the conversation. Your voice matters in shaping what we’re building.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
