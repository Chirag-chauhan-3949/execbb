import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const jobOpenings = [
  {
    id: 1,
    role: "Accelerate Your Search",
    href: "#",
    description:
      "Become an EBB Preferred Buyer and benefit from our full services; access detailed information on 100s of businesses online 24/7.",
  },
  {
    id: 2,
    role: "Secure Financing Through EBB",
    href: "#",
    description:
      "Work with one of our mortgage specialists to get the terms and rate that is right for you.",
  },
];

export default function Buyers() {
  return (
    <div className="text-left overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          
          {/* Right side: Job Openings */}
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Buyers</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Accelerate Your Search
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Take advantage of our buyer-focused services and unlock new opportunities.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {jobOpenings.map((opening) => (
                  <div key={opening.id} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {opening.role}
                    </dt>
                    <dd className="mt-2">{opening.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

                {/* Left side: Image */}
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <img
                alt="Buyer search"
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
