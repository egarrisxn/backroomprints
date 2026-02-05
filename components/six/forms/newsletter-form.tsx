"use client";

import { useActionState, useEffect, useRef } from "react";

// Simple mock action that pretends to call a server
async function mockSubscribe(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = String(formData.get("email") || "").trim();

  // Fake validation
  if (!email) {
    return {
      success: false,
      message: "Email is required",
      errors: { email: ["Please enter an email address"] },
    };
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Invalid email",
      errors: { email: ["Email must be valid"] },
    };
  }

  // Pretend network delay
  await new Promise((r) => setTimeout(r, 600));

  return {
    success: true,
    message: "Thanks for subscribing!",
  };
}

type ActionState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
  };
};

function FieldMessage({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;

  return <p style={{ color: "red", marginTop: 4 }}>{errors.join(", ")}</p>;
}

export function NewsletterForm() {
  const initialState: ActionState = { message: "", success: false };

  const [state, formAction] = useActionState(mockSubscribe, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      alert(state.message);
      formRef.current?.reset();
    } else {
      alert(state.message);
    }
  }, [state]);

  return (
    <div className="border">
      <form ref={formRef} action={formAction}>
        <label htmlFor="email" className="hidden">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          className="p-1 text-xs"
        />

        <button type="submit" className="bg-primary p-1 text-xs">
          Subscribe
        </button>
      </form>

      <FieldMessage errors={state.errors?.email} />
    </div>
  );
}
