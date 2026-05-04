"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import Lottie from "lottie-react";
import loginAnimation from "@/components/Animation/Welcome.json";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Success! You have signed in.");
    }
    if (error) {
      toast.error(error.message || "Something went wrong! Please try again");
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 md:gap-12 p-6">
      <div className="w-full max-w-[280px] md:max-w-[450px]">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>

      <Card className="border mx-auto w-[95%] max-w-md my-8 py-10 px-6 mt-5">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2 mt-2">
            <Button
              type="submit"
              isLoading={loading}
              className="flex-1 bg-slate-900 text-white font-bold"
            >
              {!loading && <Check />} {loading ? "Checking..." : "Submit"}
            </Button>
            <Button type="reset" variant="secondary" className="flex-1">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex items-center my-8 gap-4">
          <div className="h-[1px] flex-1 bg-slate-200"></div>
          <span className="text-slate-400 text-sm font-medium">OR</span>
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="h-12 w-full rounded-xl border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center gap-3 transition-all"
        >
          <FaGoogle className="text-red-500 text-lg" />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-slate-500 mt-8">
          Do not have an account?{" "}
          <Link
            href="/signup"
            className="text-orange-500 font-bold hover:underline"
          >
            Create one
          </Link>
        </p>
      </Card>
    </div>
  );
}
