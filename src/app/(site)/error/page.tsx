import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Introuvable | Wellnesday Youth Week 2025",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour découvrir la Wellnesday Youth Week 2025.",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Page Introuvable"
        pageDescription="Oups ! La page que vous recherchez n'existe pas ou a été déplacée."
      />

      <NotFound />
    </>
  );
};

export default ErrorPage;
