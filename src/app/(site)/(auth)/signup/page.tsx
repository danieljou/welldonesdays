import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription | Wellnesday Youth Week 2025",
  description:
    "Inscrivez-vous pour participer à la Wellnesday Youth Week 2025 et accéder à des opportunités uniques d'innovation, de leadership et de collaboration.",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Inscription"
        pageDescription="Rejoignez-nous pour la Wellnesday Youth Week 2025 et participez à un événement unique dédié à l'innovation et au leadership des jeunes."
      />
      <SignUp />
    </>
  );
};

export default SignupPage;
