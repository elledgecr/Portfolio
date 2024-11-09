import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: string; text: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log("Email successfully sent:", result.text);
            setStatusMessage({ type: "success", text: "Thank you! Your message has been sent." });
          },
          (error) => {
            console.error("Error sending email:", error.text);
            setStatusMessage({ type: "error", text: "Sorry, something went wrong. Please try again later." });
          }
        )
        .finally(() => {
          setTimeout(() => setStatusMessage(null), 5000);
        });
    }
  };

  return (
    <section id="contact" className="bg-darkOne text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="p-4 bg-darkTwo rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="user_email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="p-4 bg-darkTwo rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="p-4 bg-darkTwo rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-accent transition duration-300"
        >
          Send Message
        </button>
      </form>
      
      {statusMessage && (
        <div
          className={`mt-8 max-w-3xl mx-auto text-center py-3 px-4 rounded-lg ${
            statusMessage.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {statusMessage.text}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
