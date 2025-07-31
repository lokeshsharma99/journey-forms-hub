import { Link } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";

const Index = () => {
  return (
    <GovLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-govuk-black">
          Government Services Portal
        </h1>
        
        <p className="text-lg mb-8 text-govuk-dark-grey">
          Access essential government services quickly and securely. Choose from the services below to get started.
        </p>

        <div className="bg-govuk-light-blue text-govuk-white p-6 mb-8 rounded">
          <h2 className="text-xl font-semibold mb-2">Important Notice</h2>
          <p>This portal provides secure access to government services. Ensure you have the required documents before starting your application.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="border border-govuk-mid-grey p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-govuk-blue">Passport Services</h3>
            <p className="text-govuk-dark-grey mb-4">
              Apply for a new passport, renew your existing passport, or report a lost/stolen passport.
            </p>
            <Link to="/services/passport">
              <GovButton data-testid="passport-service-button">
                Start Application
              </GovButton>
            </Link>
          </div>

          <div className="border border-govuk-mid-grey p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-govuk-blue">Driving License</h3>
            <p className="text-govuk-dark-grey mb-4">
              Apply for your first driving license or renew your existing license online.
            </p>
            <Link to="/services/license">
              <GovButton data-testid="license-service-button">
                Start Application
              </GovButton>
            </Link>
          </div>

          <div className="border border-govuk-mid-grey p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-govuk-blue">Support & Feedback</h3>
            <p className="text-govuk-dark-grey mb-4">
              Submit feedback about our services or report an issue you're experiencing.
            </p>
            <Link to="/contact">
              <GovButton data-testid="contact-service-button">
                Get Help
              </GovButton>
            </Link>
          </div>
        </div>

        <div className="bg-govuk-light-grey p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Popular Services</h3>
              <ul className="space-y-1">
                <li><Link to="/services/passport" className="text-govuk-blue hover:underline">Passport Renewal</Link></li>
                <li><Link to="/services/license" className="text-govuk-blue hover:underline">License Application</Link></li>
                <li><Link to="/services/benefits" className="text-govuk-blue hover:underline">Benefits Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Help & Support</h3>
              <ul className="space-y-1">
                <li><Link to="/help" className="text-govuk-blue hover:underline">Help Centre</Link></li>
                <li><Link to="/contact" className="text-govuk-blue hover:underline">Contact Us</Link></li>
                <li><Link to="/accessibility" className="text-govuk-blue hover:underline">Accessibility Statement</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GovLayout>
  );
};

export default Index;
