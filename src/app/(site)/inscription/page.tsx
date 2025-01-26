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
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfL7kQ-7KpAARoqoSk1bclrFUG0zXQr2dnSp8kY3yuaxcRmDA/viewform?usp=header" target="_blank" passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
              {"S'inscrire en tant que Participant"}
            </button>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJ3QolD0KyuK0yViNe36o4M5bbWnhd8JfrySafKv11MGgeaQ/viewform?usp=header" target="_blank" passHref>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
              {"Devenir Sponsor"}
            </button>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScIbYvYSyqEHZJFiQ26viDZGIXrxOxL-F6yuDNsrW2Wi3BpEw/viewform?usp=header" target="_blank" passHref>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
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