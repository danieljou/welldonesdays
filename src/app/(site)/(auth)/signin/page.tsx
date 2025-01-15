import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion | Wellnesday Youth Week 2025",
  description:
    "Connectez-vous à votre compte pour accéder aux fonctionnalités de la Wellnesday Youth Week 2025 et participer à l'événement.",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Connexion"
        pageDescription="Connectez-vous à votre compte pour accéder à l'événement Wellnesday Youth Week 2025."
      />
      <Signin />
    </>
  );
};

export default SigninPage;
