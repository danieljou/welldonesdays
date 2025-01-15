import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | Wellnesday Youth Week 2025",
  description:
    "Contactez l'équipe de la Wellnesday Youth Week 2025 pour plus d'informations sur l'événement, les partenariats ou les modalités de participation.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactez-nous"
        pageDescription="Pour toute question ou demande d'information, n'hésitez pas à nous contacter."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
