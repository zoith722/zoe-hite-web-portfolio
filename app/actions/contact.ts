"use server";

import pool from "@/lib/db";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real users never fill this hidden field.
  const company = String(formData.get("company") ?? "").trim();
  if (company) {
    return { status: "success" };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill out all fields." };
  }
  if (name.length > 200 || email.length > 200) {
    return { status: "error", message: "Please shorten your name or email." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Message is too long." };
  }

  try {
    await pool.query(
      "INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
  } catch (error) {
    console.error("Failed to save contact submission", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }

  return { status: "success" };
}
