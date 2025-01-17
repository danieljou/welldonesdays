import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import SponsorSection from "@/components/Pricing/SponsorSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs et Sponsoring | Wellnesday Youth Week 2025",
  description:
    "Découvrez les modalités de participation, les packages de sponsoring et les tarifs pour la Wellnesday Youth Week 2025. Soutenez l'innovation et le leadership des jeunes camerounais.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tarifs et Sponsoring"
        pageDescription="Explorez nos packages de sponsoring et les modalités de participation pour soutenir la Wellnesday Youth Week 2025."
      />
      <Pricing />
      <SponsorSection />
      <Faq />
    </>
  );
};

export default PricingPage;
