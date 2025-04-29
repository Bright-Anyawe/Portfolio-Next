"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-800/50 p-8 rounded-lg shadow-xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-300 mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 p-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          <Image
            src="/assets/google-icon.svg"
            alt="Google"
            width={24}
            height={24}
          />
          Sign in with Google
        </motion.button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-300 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-300 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
} 