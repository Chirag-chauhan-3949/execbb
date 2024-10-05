import React from "react";
import { EyeIcon } from "lucide-react";

// Component that receives dynamic data as props
function ListingCard({
  title,
  location,
  askingPrice,
  description,
  cashFlow,
  business,
}) {
  return (
    <div className="bg-white pb-24 ">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div>
                <h2 className="text-left text-xl sm:text-2xl font-bold text-blue-600">
                  {title}
                </h2>
                <div className="text-left flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-left text-gray-600">🌍 {location}</span>
                </div>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-gray-600">Asking Price</p>
              <p className="text-xl sm:text-2xl font-bold">USD {askingPrice}</p>
            </div>
          </div>

          <p className="text-left text-gray-700 mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Cash Flow</p>
              <p className="text-xl font-bold text-blue-600">USD {cashFlow}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Business Type</p>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-blue-600" />
                <span className="w-full font-semibold">{business}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mt-4 space-y-4 sm:space-y-0">
            <div className="flex space-x-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 flex items-center justify-center">
                <EyeIcon className="w-4 h-4 mr-2" />
                Watch
              </button>
              <button className="flex-1 sm:flex-none px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                View Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component to render the listings
export default function Listings({ listingData }) {
  return (
    <section>
      <div >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex justify-between">
          <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <div className="mt-10 flex justify-end items-center gap-x-6">
            <a
              href="login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      {/* Mapping through the listingData to render multiple ListingCard components */}
      {listingData.map((listing, index) => (
        <ListingCard
          key={index}
          title={listing.title}
          location={listing.location}
          askingPrice={listing.askingPrice}
          description={listing.description}
          cashFlow={listing.cashFlow}
          business={listing.business}
        />
      ))}
      

    </section>
  );
}


