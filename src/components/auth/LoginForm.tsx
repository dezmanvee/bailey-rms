//

"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "~/server/better-auth/client";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

const STAFF_EMAIL_DOMAIN = "@hamptonpreparatoryschool.com";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { refetch: refetchMe } = api.auth.getCurrentUser.useQuery(undefined, {
    enabled: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.endsWith(STAFF_EMAIL_DOMAIN)) {
      setError(`Email must end with ${STAFF_EMAIL_DOMAIN}`);
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Invalid email or password");
        return;
      }

      // Fetch RMS user to determine role
      const { data: me } = await refetchMe();
      if (me?.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/teacher");
      }
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="animate-in fade-in slide-in-from-top-2 flex items-start gap-3 rounded-xl border-2 border-red-200 bg-red-50 p-4 duration-300">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="font-medium text-gray-700">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder={`teacher${STAFF_EMAIL_DOMAIN}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="focus:border-crimson h-12 rounded-xl border-2 border-gray-200 pl-12 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="font-medium text-gray-700">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="focus:border-crimson h-12 rounded-xl border-2 border-gray-200 pr-12 pl-12 transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="text-crimson focus:ring-crimson h-4 w-4 rounded border-gray-300 focus:ring-offset-0"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <button
          type="button"
          className="text-crimson hover:text-crimson-dark text-sm font-medium transition-colors"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="gradient-crimson shadow-crimson hover:shadow-crimson-lg h-12 w-full rounded-xl font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <p className="mt-6 text-center text-sm text-gray-500">
        Need help? Contact IT Support at{" "}
        <span className="text-crimson font-medium">
          support@hamptonpreparatoryschool.com
        </span>
      </p>
    </form>
  );
}
