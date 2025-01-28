import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscription | Wellnesday Youth Week 2025",
  description:
    "Découvrez les modalités de participation, les packages de sponsoring et les tarifs pour la Wellnesday Youth Week 2025. Soutenez l'innovation et le leadership des jeunes camerounais.",
};

const ProgramPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Inscription"
        pageDescription="Inscrivez vous pour participer"
      />

      {/* Section des boutons d'inscription */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeH3c1sEw1emmzCjUznsf2cbM2NPdcY2M6EpCoZtEal6kXLkQ/viewform?usp=header"
            target="_blank"
            passHref
          >
            <button className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 md:w-auto">
              {"S'inscrire en tant que Participant"}
            </button>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSQGAwWBnAe3VqOTDX6fhh2adcf0Omykq7LM3JKYx1ErF5ZQ/viewform?usp=header"
            target="_blank"
            passHref
          >
            <button className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 md:w-auto">
              {"Devenir Sponsor"}
            </button>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRyQGVGPGh0LaGOydwqsbAHomgImDk4lV8sJ5ch8FDneql3g/viewform?usp=header"
            target="_blank"
            passHref
          >
            <button className="w-full rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700 md:w-auto">
              {" Devenir Partenaire"}
            </button>
          </Link>
        </div>
      </div>

      <Faq />
    </>
  );
};

export default ProgramPage;
