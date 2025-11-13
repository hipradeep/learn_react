import React, { useState } from "react";

// Dummy submit function (replace with real API call)
const submitForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve(true);
    }, 1000);
  });
};

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Simple front-end validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitForm(form); // simulate API call
      alert("Form submitted successfully!");
      setForm({
        name: '',
        email: '',
        message: '',
        category: 'general'
      }); // reset form
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
      </div>

      <div>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="general">General</option>
          <option value="feedback">Feedback</option>
          <option value="support">Support</option>
        </select>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;
