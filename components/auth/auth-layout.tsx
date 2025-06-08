import type { ReactNode } from "react"
import Link from "next/link"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Auth form */}
      <div className="flex flex-col justify-center w-full px-4 sm:px-6 lg:flex-none lg:w-1/2 xl:w-2/5">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="mb-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Dappfolio</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
          </div>

          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative lg:w-1/2 xl:w-3/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">Manage Your Real Estate Portfolio on the Blockchain</h3>
            <p className="text-xl max-w-xl text-center">
              Tokenize properties, manage tenants, and track maintenance all in one secure platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
