import React, { useState } from "react";

export default function Component({ onFilterChange }) {
  const [filters, setFilters] = useState({
    state: "New Jersey",
    county: "All",
    minPrice: 0,
    maxPrice: 5000000,
    minDownPayment: 0,
    maxDownPayment: 5000000,
    category: "All Categories",
    type: "All Subcategories",
  });

  const handleInputChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = () => {
    onFilterChange(filters);
  };

  const handleReset = () => {
    setFilters({
      state: "New Jersey",
      county: "All",
      minPrice: 0,
      maxPrice: 5000000,
      minDownPayment: 0,
      maxDownPayment: 5000000,
      category: "All Categories",
      type: "All Subcategories",
    });
  };

  return (
    <div className="rounded-lg p-6 space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Filter Listings</h2>

      <div className="space-y-6">
        {/* Location Section */}
        <div>
          <h3 className="text-xl font-semibold">Location</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <select
                id="state"
                value={filters.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="block w-full mt-1 p-2 border rounded-md text-gray-900"
              >
                <option value="New Jersey">New Jersey</option>
                <option value="New York">New York</option>
                <option value="Pennsylvania">Pennsylvania</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="county" className="block text-sm font-medium text-gray-700">County</label>
              <select
                id="county"
                value={filters.county}
                onChange={(e) => handleInputChange("county", e.target.value)}
                className="block w-full mt-1 p-2 border rounded-md text-gray-900"
              >
                <option value="All">All</option>
                <option value="Bergen">Bergen</option>
                <option value="Essex">Essex</option>
                <option value="Hudson">Hudson</option>
              </select>
            </div>
          </div>
        </div>

        {/* Price Range Section */}
        <div>
          <h3 className="text-xl font-semibold">Price Range</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Asking Price</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleInputChange("minPrice", e.target.value)}
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded-md text-gray-900"
                />
                <span className="self-center">to</span>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleInputChange("maxPrice", e.target.value)}
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded-md text-gray-900"
                />
              </div>
              {/* Add Slider here if needed */}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Down Payment</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={filters.minDownPayment}
                  onChange={(e) => handleInputChange("minDownPayment", e.target.value)}
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded-md text-gray-900"
                />
                <span className="self-center">to</span>
                <input
                  type="number"
                  value={filters.maxDownPayment}
                  onChange={(e) => handleInputChange("maxDownPayment", e.target.value)}
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded-md text-gray-900"
                />
              </div>
              {/* Add Slider here if needed */}
            </div>
          </div>
        </div>

        {/* Business Details Section */}
        <div>
          <h3 className="text-xl font-semibold">Business Details</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Business Category</label>
              <select
                id="category"
                value={filters.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="block w-full mt-1 p-2 border rounded-md text-gray-900"
              >
                <option value="All Categories">All Categories</option>
                <option value="Retail">Retail</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Service">Service</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Business Type</label>
              <select
                id="type"
                value={filters.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="block w-full mt-1 p-2 border rounded-md text-gray-900"
              >
                <option value="All Subcategories">All Subcategories</option>
                <option value="Convenience Store">Convenience Store</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Salon">Salon</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-4">
        <button
          onClick={handleFilterSubmit}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="w-full border border-gray-300 text-gray-900 p-2 rounded-md hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
