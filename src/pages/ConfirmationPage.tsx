import { useParams, Link } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";

const ConfirmationPage = () => {
  const { service } = useParams();
  
  const getServiceDetails = () => {
    switch (service) {
      case "passport":
        return {
          title: "Passport application submitted",
          reference: "PS-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          nextSteps: [
            "You'll receive an email confirmation within 24 hours",
            "Your application will be processed within 3 weeks",
            "You may be asked to attend an interview",
            "Your new passport will be sent by secure delivery"
          ],
          whatHappensNext: "We'll review your application and may contact you if we need more information. You can track the progress of your application using the reference number above."
        };
      case "license":
        return {
          title: "Driving license application submitted",
          reference: "DL-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          nextSteps: [
            "You'll receive an email confirmation within 24 hours",
            "Your provisional license will arrive within 1 week",
            "You can then book your theory and practical tests",
            "Your full license will be issued after passing both tests"
          ],
          whatHappensNext: "We'll process your application and send your provisional license to the address you provided. Make sure to check your documents are correct when they arrive."
        };
      case "contact":
        return {
          title: "Message sent successfully",
          reference: "EN-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          nextSteps: [
            "You'll receive an email confirmation within 24 hours",
            "We'll review your enquiry within 2 working days",
            "You'll receive a response within 5 working days",
            "For urgent matters, you can call 0300 123 4567"
          ],
          whatHappensNext: "Our customer service team will review your enquiry and respond using your preferred contact method. Please keep your reference number for any follow-up correspondence."
        };
      default:
        return {
          title: "Application submitted",
          reference: "APP-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          nextSteps: ["Your application is being processed"],
          whatHappensNext: "We'll be in touch soon."
        };
    }
  };

  const details = getServiceDetails();

  return (
    <GovLayout>
      <div className="max-w-2xl">
        <div className="govuk-panel mb-8" data-testid="confirmation-panel">
          <h1 className="text-3xl font-bold mb-4">
            {details.title}
          </h1>
          <div className="text-xl">
            Your reference number<br />
            <strong className="text-2xl" data-testid="reference-number">{details.reference}</strong>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">What happens next</h2>
        <p className="mb-6 text-govuk-dark-grey">
          {details.whatHappensNext}
        </p>

        <ol className="list-decimal list-inside space-y-2 mb-8 pl-4">
          {details.nextSteps.map((step, index) => (
            <li key={index} className="text-govuk-dark-grey">{step}</li>
          ))}
        </ol>

        <div className="bg-govuk-light-grey p-6 mb-8">
          <h3 className="font-semibold mb-3">Important</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Save or print this confirmation for your records</li>
            <li>Keep your reference number safe - you'll need it for any enquiries</li>
            <li>Check your email for further updates (including spam folder)</li>
            <li>Contact us if you don't hear from us within the expected timeframe</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <GovButton data-testid="return-home">
              Return to Homepage
            </GovButton>
          </Link>
          <Link to="/services">
            <GovButton variant="secondary" data-testid="view-services">
              View All Services
            </GovButton>
          </Link>
        </div>

        <div className="mt-8 p-4 border-l-4 border-govuk-blue">
          <h3 className="font-semibold mb-2">Need help?</h3>
          <p className="text-sm text-govuk-dark-grey mb-2">
            If you have any questions about your application, you can:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Email us at <a href="mailto:support@gov.uk" className="text-govuk-blue hover:underline">support@gov.uk</a></li>
            <li>• Call us on <a href="tel:03001234567" className="text-govuk-blue hover:underline">0300 123 4567</a></li>
            <li>• <Link to="/contact" className="text-govuk-blue hover:underline">Use our online contact form</Link></li>
          </ul>
        </div>
      </div>
    </GovLayout>
  );
};

export default ConfirmationPage;