import { LoginForm } from "~/components/auth/LoginForm";
import { GraduationCap, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="bg-gradient-oxblood relative hidden flex-col justify-center overflow-hidden p-12 text-white lg:flex">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 max-w-lg">
          {/* Logo */}
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
              <GraduationCap className="h-10 w-10 text-red-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Bailey's Bowen College</h1>
              <p className="text-sm text-white/80">Result Management System</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Welcome to the Future of Academic Management
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Easy Result Entry
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Streamlined workflow that makes entering student results
                    quick and error-free
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Instant PDF Generation
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Generate professional report cards in seconds, ready for
                    printing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Performance Analytics
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    Get data-driven insights to improve teaching and learning
                    outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <p className="text-sm text-white/60">
              No 14 Davis Cole Crescent, Pineville Estate, Surulere, Lagos State
            </p>
            <p className="mt-1 text-sm text-white/60">
              📞 08115414915 • 📧 baileysbowencollege@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-8 text-center lg:hidden">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="bg-gradient-oxblood shadow-oxblood flex h-12 w-12 items-center justify-center rounded-xl">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Bailey's Bowen
              </h1>
            </div>
            <p className="text-sm text-gray-600">Result Management System</p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-xl">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to your account to continue
              </p>
            </div>

            <LoginForm />
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
            <p className="mb-2 text-sm font-medium text-blue-900">
              🔑 Demo Credentials
            </p>
            <div className="space-y-1 text-xs text-blue-800">
              <p>
                Admin: <span className="font-mono">admin@baileybowen.edu</span>
              </p>
              <p>
                Teacher:{" "}
                <span className="font-mono">adigun@baileybowen.edu</span>
              </p>
              <p>
                Password: <span className="font-mono">password123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
