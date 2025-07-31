import { ReactNode } from "react";
import GovHeader from "./GovHeader";
import GovFooter from "./GovFooter";

interface GovLayoutProps {
  children: ReactNode;
}

const GovLayout = ({ children }: GovLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <GovHeader />
      <main className="flex-1 bg-govuk-white">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      <GovFooter />
    </div>
  );
};

export default GovLayout;