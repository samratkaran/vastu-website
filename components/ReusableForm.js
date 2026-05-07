"use client";

import { useState } from "react";
import { services } from "@/data/services";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};
// this is comment to preivet things

export default function ReusableForm({ title = "Get In Touch" }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

async function handleSubmit(e) {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);

      setFormData(initialState);

      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.log(error);

    alert("Something went wrong");
  }
}

  const inputClass =
    "w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
  const errorClass = "text-sm text-destructive mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {title && (
        <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-2">
          {title}
        </h3>
      )}

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-sm text-center">
          Thank you! Your message has been received. We will contact you soon.
        </div>
      )}

      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          aria-label="Your Name"
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          aria-label="Phone Number"
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          aria-label="Email Address"
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
          aria-label="Select a service"
        >
          <option value="">Select a Service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClass} resize-none`}
          aria-label="Your Message"
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
