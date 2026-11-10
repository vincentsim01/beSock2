"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
  subject: z.string().trim().min(1, "Please enter a subject."),
  message: z.string().trim().min(1, "Please enter a message."),
});

type ContactValues = z.infer<typeof schema>;
const inputClass = "mt-2 w-full border border-line bg-white px-4 py-3 text-base outline-offset-2";
const errorClass = "mt-2 text-sm text-red-700";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit() {
    reset();
    setSubmitted(true);
  }

  return (
    <div>
      {submitted && (
        <div role="status" className="mb-6 border border-line bg-cream p-4 text-sm leading-6">
          Your form passed validation. This is a demo; your message has not been sent.
        </div>
      )}
      <form noValidate onChange={() => setSubmitted(false)} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
          <input id="contact-name" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
          {errors.name && <p id="name-error" className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
          <input id="contact-email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-subject" className="text-sm font-medium">Subject</label>
          <input id="contact-subject" className={inputClass} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
          {errors.subject && <p id="subject-error" className={errorClass}>{errors.subject.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
          <textarea id="contact-message" rows={6} className={`${inputClass} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
          {errors.message && <p id="message-error" className={errorClass}>{errors.message.message}</p>}
        </div>
        <Button type="submit">Submit message</Button>
      </form>
    </div>
  );
}
