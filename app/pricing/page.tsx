import { CheckIcon, ClockIcon, ReceiptRefundIcon, ShieldCheckIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ClockIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ReceiptRefundIcon,
  },
  {
    name: "Same-day transfers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ArrowPathIcon,
  },
  {
    name: "Privacy protected",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ShieldCheckIcon,
  },
]
const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$15",
    description: "Perfect for giving your fledgling project a boost.",
    features: ["5 Products", "Up to 1,000 Subscribers", "Basic analytics", "48-hour support response time"],
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$30",
    description: "Necessary tools to launch your startup.",
    features: [
      "25 Products",
      "Up to 10,000 Subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$60",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited Products",
      "Unlimited Subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom integrations",
    ],
  },
]
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949c3f9fc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp=0.5&fp-x=0.5&fp-y=0.25&w=2560&h=854&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="hidden md:absolute md:-top-10 md:left-1/2 md:-z-10 md:ml-10 md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Pricing plans</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi id fuga in voluptas.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="p-8 sm:bg-white/5 sm:pb-6">
                  <div className="flex items-center gap-x-3 text-white">
                    <feature.icon className="h-6 w-6 flex-none" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi id fuga in voluptas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {tiers.map((tier) => (
              <div key={tier.id} className="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5">
                <div className="p-8 sm:p-10">
                  <h3 id={tier.id} className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                    <span className="text-base font-semibold text-gray-600">/month</span>
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                  <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-babyblue-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 sm:p-10">
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="block rounded-md bg-babyblue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-babyblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-babyblue-600"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
          <div className="mt-12">
            <dl className="space-y-10 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-10">
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-3 text-base text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
