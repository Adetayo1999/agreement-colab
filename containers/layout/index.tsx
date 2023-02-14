import { Header } from "@/components/header";
import { CreateAgreement } from "@/components/modals/create-agreement";
import { SignAgreement } from "@/components/modals/sign-agreement";
import { Sidebar } from "@/components/sidebar";
import { LayoutProps } from "@/types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      {children}
      <CreateAgreement />
      <SignAgreement />
      <Sidebar />
    </div>
  );
};
