"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Contact</h2>
        <p>Have a role, project, or question in mind? Send a note below.</p>

        {state.status === "success" ? (
          <p className="form-status form-status-success" role="status">
            Thanks — your message has been sent. I&apos;ll get back to you soon.
          </p>
        ) : (
          <form action={formAction} className="contact-form" noValidate>
            <div
              className="hp-field"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px" }}
            >
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required maxLength={200} />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={200}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={5}
              />
            </div>

            {state.status === "error" && state.message ? (
              <p className="form-status form-status-error" role="alert">
                {state.message}
              </p>
            ) : null}

            <button type="submit" className="btn btn-primary" disabled={pending}>
              {pending ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
