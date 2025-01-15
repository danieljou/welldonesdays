import React from "react";
import ResetPassword from "@/components/Auth/ResetPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réinitialisation du mot de passe | Wellnesday Youth Week 2025",
  description:
    "Réinitialisez votre mot de passe pour accéder à votre compte et participer à la Wellnesday Youth Week 2025.",
};

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <Breadcrumb
        pageName="Réinitialisation du mot de passe"
        pageDescription="Entrez un nouveau mot de passe pour accéder à votre compte."
      />
      <ResetPassword token={params.token} />
    </>
  );
};

export default ResetPasswordPage;
