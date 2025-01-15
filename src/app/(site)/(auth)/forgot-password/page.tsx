import React from "react";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mot de passe oublié | Wellnesday Youth Week 2025",
  description:
    "Réinitialisez votre mot de passe pour accéder à votre compte et participer à la Wellnesday Youth Week 2025.",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mot de passe oublié"
        pageDescription="Réinitialisez votre mot de passe pour accéder à votre compte."
      />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;