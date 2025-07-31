import { Link } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";

const ServicesPage = () => {
  const services = [
    {
      id: "passport",
      title: "Passport Services",
      description: "Apply for a new passport, renew your existing passport, or report a lost/stolen passport.",
      link: "/services/passport",
      estimatedTime: "3 weeks",
      cost: "£82.50",
      requirements: ["Valid ID", "Passport photos", "Supporting documents"]
    },
    {
      id: "license",
      title: "Driving License",
      description: "Apply for your first driving license or renew your existing license online.",
      link: "/services/license", 
      estimatedTime: "1 week",
      cost: "£34.00",
      requirements: ["Valid ID", "Address proof", "Medical declaration"]
    },
    {
      id: "benefits",
      title: "Benefits & Support",
      description: "Check what benefits you're entitled to and apply for financial support.",
      link: "/services/benefits",
      estimatedTime: "2 weeks",
      cost: "Free",
      requirements: ["National Insurance number", "Income details", "Bank details"]
    },
    {
      id: "tax",
      title: "Tax Services",
      description: "File your tax return, check your tax code, or get a tax refund.",
      link: "/services/tax",
      estimatedTime: "5 days",
      cost: "Free",
      requirements: ["UTR number", "Employment details", "Income records"]
    },
    {
      id: "business",
      title: "Business Services",
      description: "Register a new business, file annual returns, or update company details.",
      link: "/services/business",
      estimatedTime: "24 hours",
      cost: "£12.00",
      requirements: ["Company information", "Director details", "Registered address"]
    },
    {
      id: "housing",
      title: "Housing & Planning",
      description: "Apply for planning permission, register social housing, or report housing issues.",
      link: "/services/housing",
      estimatedTime: "8 weeks",
      cost: "£462.00",
      requirements: ["Property details", "Plans and drawings", "Neighbor consultation"]
    }
  ];

  return (
    <GovLayout>
      <div className="max-w-6xl">
        <nav className="mb-6">
          <ol className="flex text-sm text-govuk-mid-grey">
            <li><a href="/" className="hover:text-govuk-blue">Home</a></li>
            <li className="mx-2">&gt;</li>
            <li className="text-govuk-black">Services</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-govuk-black">
          Government Services
        </h1>

        <p className="text-lg mb-8 text-govuk-dark-grey max-w-3xl">
          Access all government services in one place. Click on any service below to start your application 
          or find more information about requirements and processing times.
        </p>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Search services..." 
              className="govuk-input flex-1"
              data-testid="service-search"
            />
            <select className="govuk-input" data-testid="service-filter">
              <option value="">All categories</option>
              <option value="identity">Identity & Documents</option>
              <option value="money">Money & Benefits</option>
              <option value="business">Business & Self-employed</option>
              <option value="housing">Housing & Planning</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="border border-govuk-mid-grey p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-xl font-semibold mb-3 text-govuk-blue">
                {service.title}
              </h3>
              
              <p className="text-govuk-dark-grey mb-4">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-semibold">Processing time:</span>
                  <br />
                  <span className="text-govuk-dark-grey">{service.estimatedTime}</span>
                </div>
                <div>
                  <span className="font-semibold">Cost:</span>
                  <br />
                  <span className="text-govuk-dark-grey">{service.cost}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-sm">You'll need:</span>
                <ul className="list-disc list-inside text-sm text-govuk-dark-grey mt-1">
                  {service.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {service.link.includes('/services/') ? (
                <Link to={service.link}>
                  <GovButton data-testid={`start-${service.id}-service`}>
                    Start Now
                  </GovButton>
                </Link>
              ) : (
                <GovButton 
                  variant="secondary"
                  onClick={() => alert('Service coming soon')}
                  data-testid={`${service.id}-coming-soon`}
                >
                  Coming Soon
                </GovButton>
              )}
            </div>
          ))}
        </div>

        <div className="bg-govuk-light-grey p-6">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-govuk-dark-grey text-sm mb-2">
                Call our helpline for assistance with any service
              </p>
              <p className="font-semibold">0300 123 4567</p>
              <p className="text-sm text-govuk-mid-grey">Mon-Fri, 8am-6pm</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Online Help</h3>
              <p className="text-govuk-dark-grey text-sm mb-2">
                Get instant answers to common questions
              </p>
              <Link to="/help" className="text-govuk-blue hover:underline">
                Visit Help Centre
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-govuk-dark-grey text-sm mb-2">
                Tell us about your experience using our services
              </p>
              <Link to="/contact" className="text-govuk-blue hover:underline">
                Send Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GovLayout>
  );
};

export default ServicesPage;