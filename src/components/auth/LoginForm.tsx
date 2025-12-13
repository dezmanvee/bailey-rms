"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "~/server/better-auth/client";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AlertCircle, Loader2 } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { refetch: refetchMe } = api.auth.getCurrentUser.useQuery(undefined, {
    enabled: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
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
        <div className="flex items-start gap-3 rounded-xl border-2 border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="font-medium text-gray-700">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="teacher@baileybowen.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="focus:border-oxblood-900 h-12 rounded-xl border-2 border-gray-200 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="font-medium text-gray-700">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className="focus:border-oxblood-900 h-12 rounded-xl border-2 border-gray-200 transition-colors"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <button
          type="button"
          className="text-oxblood-900 hover:text-oxblood-950 text-sm font-medium transition-colors"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-oxblood shadow-oxblood hover:shadow-oxblood-lg h-12 w-full rounded-xl font-medium text-white transition-all hover:opacity-90"
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
        <span className="font-medium">support@baileybowen.edu</span>
      </p>
    </form>
  );
}
