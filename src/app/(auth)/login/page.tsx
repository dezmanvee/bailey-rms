// import { LoginForm } from "~/components/auth/LoginForm";
// import { GraduationCap, CheckCircle } from "lucide-react";
// import Image from "next/image";

// export default function LoginPage() {
//   return (
//     <div className="grid min-h-screen lg:grid-cols-2">
//       {/* Left Side - Branding */}
//       <div className="bg-gradient-oxblood relative hidden flex-col justify-center overflow-hidden p-12 text-white lg:flex">
//         {/* Decorative Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
//           <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />
//         </div>

//         <div className="relative z-10 max-w-lg">
//           {/* Logo */}
//           <div className="mb-12 flex items-center gap-4">
//             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
//               <GraduationCap className="h-10 w-10 text-red-900" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold">Bailey's Bowen College</h1>
//               <p className="text-sm text-white/80">Result Management System</p>
//             </div>
//           </div>

//           {/* Features */}
//           <div className="space-y-6">
//             <h2 className="mb-4 text-2xl font-semibold">
//               Welcome to the Future of Academic Management
//             </h2>

//             <div className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//                   <CheckCircle className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="mb-1 text-lg font-semibold">
//                     Easy Result Entry
//                   </h3>
//                   <p className="text-sm leading-relaxed text-white/80">
//                     Streamlined workflow that makes entering student results
//                     quick and error-free
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//                   <CheckCircle className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="mb-1 text-lg font-semibold">
//                     Instant PDF Generation
//                   </h3>
//                   <p className="text-sm leading-relaxed text-white/80">
//                     Generate professional report cards in seconds, ready for
//                     printing
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//                   <CheckCircle className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="mb-1 text-lg font-semibold">
//                     Performance Analytics
//                   </h3>
//                   <p className="text-sm leading-relaxed text-white/80">
//                     Get data-driven insights to improve teaching and learning
//                     outcomes
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="mt-12 border-t border-white/20 pt-8">
//             <p className="text-sm text-white/60">
//               No 14 Davis Cole Crescent, Pineville Estate, Surulere, Lagos State
//             </p>
//             <p className="mt-1 text-sm text-white/60">
//               📞 08115414915 • 📧 baileysbowencollege@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="flex items-center justify-center bg-gray-50 p-8">
//         <div className="w-full max-w-md">
//           {/* Mobile Logo */}
//           <div className="mb-8 text-center lg:hidden">
//             <div className="mb-4 inline-flex items-center gap-3">
//               <div className="bg-gradient-oxblood shadow-oxblood flex h-12 w-12 items-center justify-center rounded-xl">
//                 <GraduationCap className="h-7 w-7 text-white" />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Bailey's Bowen
//               </h1>
//             </div>
//             <p className="text-sm text-gray-600">Result Management System</p>
//           </div>

//           {/* Login Card */}
//           <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-xl">
//             <div className="mb-8">
//               <h2 className="mb-2 text-3xl font-bold text-gray-900">
//                 Welcome Back
//               </h2>
//               <p className="text-gray-600">
//                 Sign in to your account to continue
//               </p>
//             </div>

//             <LoginForm />
//           </div>

//           {/* Demo Credentials */}
//           <div className="mt-6 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
//             <p className="mb-2 text-sm font-medium text-blue-900">
//               🔑 Demo Credentials
//             </p>
//             <div className="space-y-1 text-xs text-blue-800">
//               <p>
//                 Admin: <span className="font-mono">admin@baileybowen.edu</span>
//               </p>
//               <p>
//                 Teacher:{" "}
//                 <span className="font-mono">adigun@baileybowen.edu</span>
//               </p>
//               <p>
//                 Password: <span className="font-mono">password123</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { LoginForm } from "~/components/auth/LoginForm";
import { BookOpen } from "lucide-react";
import { Card } from "~/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-slate-50 p-4">
      <div className="flex w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row">
        <div className="bg-accent flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-8">
          <div>
            <div className="mb-12 flex items-center gap-3">
              <div className="shadow-crimson relative h-12 w-12 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Hampton Preparatory School logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h1 className="text-foreground text-xl font-bold">
                  Hampton Preparatory School
                </h1>
                <p className="text-muted-foreground text-sm">
                  Result Management System
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <h2 className="text-foreground mb-2 text-3xl font-bold">
                Welcome Back
              </h2>
              <p className="text-muted-foreground mb-8">
                Sign in to manage student results and generate reports
              </p>

              <LoginForm />
            </div>
          </div>

          <div className="border-border/50 mt-12 border-t pt-8">
            <div className="text-muted-foreground space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <span className="shrink-0">📍</span>
                <span>18 Chris Madueke Street, Lekki, Phase 1</span>
              </p>
              <p className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2">
                  <span>📞</span>
                  <span>08115414915</span>
                </span>
                <span className="flex items-center gap-2">
                  <span>📧</span>
                  <span className="break-all">
                    info@hamptonpreparatoryschool.com
                  </span>
                </span>
              </p>
            </div>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-muted-foreground hover:text-crimson text-sm underline transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="relative hidden w-full flex-col items-center justify-center overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 p-8 lg:flex lg:w-1/2 lg:p-12">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/banner.png"
              alt="Professional education environment"
              fill
              sizes="100vw"
              className="h-full w-full object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/40 to-slate-800/40" />
          </div>

          <div className="relative z-10 w-full max-w-md space-y-6">
            <Card className="animate-float-slow bg-accent rounded-2xl border-none p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
                  <div className="bg-crimson h-2 w-2 rounded-full" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2 text-lg font-bold">
                    Easy Result Entry
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Streamlined workflow that makes entering student results
                    quick and error-free
                  </p>
                </div>
              </div>
            </Card>

            <Card className="gradient-crimson shadow-crimson-lg animate-float-medium ml-8 rounded-2xl border-none p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Instant PDF Generation
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    Generate professional report cards in seconds, ready for
                    printing
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-accent animate-float-fast rounded-2xl border-none p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
                  <div className="bg-crimson h-2 w-2 rounded-full" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2 text-lg font-bold">
                    Performance Analytics
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Get data-driven insights to improve teaching and learning
                    outcomes
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
