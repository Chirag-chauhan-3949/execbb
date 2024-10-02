import ListingCard from "../Components/Listingcard";
import BackgroundColor from "../components/BackgroundColor";
import Navbar from "../Components/Navbar";
import FilterComponent from "../Components/Filter";

export default function BuyersSearch() {
  const listingData = [
    {
      title: "42617655, 04 Food/Liquor-Deli",
      location: "Passaic, NJ",
      askingPrice: "110,000",
      description:
        "Popular, established profitable mini market in good location & nice neighborhood",
      cashFlow: "61,124",
      business: "Food",
    },
    {
      title: "132297656, 05 General Services-Day Care  ",
      location: "Bergen, NJ",
      askingPrice: "1,475,000 ",
      description:
        "Well established (23yrs) Non Franchised Daycare Center in Bergen County rated 5.5",
      cashFlow: "473,795",
      business: "General Services",
    },
    {
      title: " 132297664, 05 General Services-Day Care   ",
      location: "Bergen, NJ",
      askingPrice: "130,000",
      description:
        "We operate year round. We have recently extended the age of children for the",
      cashFlow: "48,708",
      business: "General Services",
    },
    {
      title: "4887674, 03 Food/Liquor-Liquor Lic. C",
      location: "NJ",
      askingPrice: "145,000",
      description:
        "Well established (23yrs) Non Franchised Daycare Center in Bergen County rated 5.5",
      cashFlow: "Undisclosed",
      business: "General Services",
    },
    {
      title: "4907686, 03 Food/Liquor-Night Club",
      location: "Middlesex, NJ",
      askingPrice: "300,000",
      description:
        " Asset sale with Liquor License. 4000 sqft lounge/bar/restaurant current owner",
      cashFlow: "49,650",
      business: "Asset Services",
    },
    {
      title: "4907689, 03 Food/Liquor-Liquor Store ",
      location: "Sussex",
      askingPrice: "285,000",
      description:
        " Beautiful Full Service restaurant with bars on first floor and down stairs. ",
      cashFlow: "75,842",
      business: "Liquor",
    },
    {
      title: " 4907690, 03 Automotive/Transportation",
      location: "NJ",
      askingPrice: "850,000",
      description:
        " 25 year established full service car wash. Owner is experienced operator",
      cashFlow: "194,771",
      business: "Transportation",
    },
    {
      title: "42617655, 04 Food/Liquor-Deli",
      location: "Passaic, NJ",
      askingPrice: "110,000",
      description:
        "Popular, established profitable mini market in good location & nice neighborhood",
      cashFlow: "61,124",
      business: "Food",
    },
    {
      title: "132297656, 05 General Services-Day Care  ",
      location: "Bergen, NJ",
      askingPrice: "1,475,000 ",
      description:
        "Well established (23yrs) Non Franchised Daycare Center in Bergen County rated 5.5",
      cashFlow: "473,795",
      business: "General Services",
    },
    {
      title: " 132297664, 05 General Services-Day Care   ",
      location: "Bergen, NJ",
      askingPrice: "130,000",
      description:
        "We operate year round. We have recently extended the age of children for the",
      cashFlow: "48,708",
      business: "General Services",
    },
    {
      title: "4887674, 03 Food/Liquor-Liquor Lic. C",
      location: "NJ",
      askingPrice: "145,000",
      description:
        "Well established (23yrs) Non Franchised Daycare Center in Bergen County rated 5.5",
      cashFlow: "Undisclosed",
      business: "General Services",
    },
    {
      title: "4907686, 03 Food/Liquor-Night Club",
      location: "Middlesex, NJ",
      askingPrice: "300,000",
      description:
        " Asset sale with Liquor License. 4000 sqft lounge/bar/restaurant current owner",
      cashFlow: "49,650",
      business: "Asset Services",
    },
    {
      title: "4907689, 03 Food/Liquor-Liquor Store ",
      location: "Sussex",
      askingPrice: "285,000",
      description:
        " Beautiful Full Service restaurant with bars on first floor and down stairs. ",
      cashFlow: "75,842",
      business: "Liquor",
    },
    {
      title: " 4907690, 03 Automotive/Transportation",
      location: "NJ",
      askingPrice: "850,000",
      description:
        " 25 year established full service car wash. Owner is experienced operator",
      cashFlow: "194,771",
      business: "Transportation",
    },
  ];
  
  return (
    <>
    <div className="absolute inset-x-0 top-0 z-50">
      <Navbar />
    </div>
    
    <div className="flex mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 justify-between">
      <div className="hidden sm:block">
        <FilterComponent />
      </div>
      <ListingCard listingData={listingData} />
    </div>
  </>
  );
}

// Deploying 6