"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "ayushjrathod";
    const templateId = "template_2vk2u29";
    const publicKey = "8T3ZNHe4phqccl-IX";

    try {
      const templateParams = {
        to_email: "ayushjrathod7@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: "The message is: " + formData.message + " from " + formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">Get In Touch</h2>
          <p className="text-center mb-4 text-xl dark:text-gray-300">
            I am always interested in exploring new opportunities and collaborations. If you have a project in mind or
            just want to say hi, feel free to reach out!
          </p>
          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded ${
                submitStatus.success
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex w-full gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:gray-indigo-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-8 py-3 w-full bg-gray-800 text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
