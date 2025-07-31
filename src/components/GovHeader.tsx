import { Link } from "react-router-dom";

const GovHeader = () => {
  return (
    <header className="bg-govuk-black text-govuk-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold hover:text-govuk-yellow focus:govuk-focus">
              GOV.UK
            </Link>
            <span className="text-govuk-mid-grey">Services Portal</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="hover:text-govuk-yellow focus:govuk-focus py-2 px-3"
              id="nav-home"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="hover:text-govuk-yellow focus:govuk-focus py-2 px-3"
              id="nav-services"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-govuk-yellow focus:govuk-focus py-2 px-3"
              id="nav-contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GovHeader;