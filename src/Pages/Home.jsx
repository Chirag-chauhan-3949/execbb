import HeroSection from "../Components/Herosection";
import Buyers from "../Components/Buyers";
import Sellers from "../Components/Sellers";
import Footer from "../Components/Footer"
import ListingCard from "../Components/Listingcard";
import FilterComponent from "../Components/Filter";

export default function Home() {
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
  ];
  return (
    <>
      <HeroSection />
      <Buyers />
      <Sellers />
      <ListingCard listingData={listingData}/>
      <FilterComponent/>
      <Footer/>
    </>
  );
}
