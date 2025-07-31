import { Link } from "react-router-dom";

const GovFooter = () => {
  return (
    <footer className="bg-govuk-dark-grey text-govuk-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/passport" className="hover:text-govuk-yellow focus:govuk-focus">
                  Passport Services
                </Link>
              </li>
              <li>
                <Link to="/services/license" className="hover:text-govuk-yellow focus:govuk-focus">
                  Driving License
                </Link>
              </li>
              <li>
                <Link to="/services/benefits" className="hover:text-govuk-yellow focus:govuk-focus">
                  Benefits & Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-govuk-yellow focus:govuk-focus">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-govuk-yellow focus:govuk-focus">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-govuk-yellow focus:govuk-focus">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-govuk-yellow focus:govuk-focus">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-govuk-yellow focus:govuk-focus">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-govuk-yellow focus:govuk-focus">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-govuk-mid-grey mt-8 pt-4 text-center">
          <p>&copy; 2024 Crown Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default GovFooter;