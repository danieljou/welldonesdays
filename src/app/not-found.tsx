import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comming Soon",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="Comming Soon" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
