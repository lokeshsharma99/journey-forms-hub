import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";
import GovInput from "@/components/GovInput";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    enquiryType: "general",
    message: "",
    preferredContact: "email"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Enter your full name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Enter a subject for your enquiry";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Enter your message";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast({
        title: "Message Sent",
        description: "Your enquiry has been submitted successfully. Reference: EN-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      });
      navigate("/confirmation/contact");
    }
  };

  return (
    <GovLayout>
      <div className="max-w-2xl">
        <nav className="mb-6">
          <ol className="flex text-sm text-govuk-mid-grey">
            <li><a href="/" className="hover:text-govuk-blue">Home</a></li>
            <li className="mx-2">&gt;</li>
            <li className="text-govuk-black">Contact Us</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-govuk-black">
          Contact Us
        </h1>

        <div className="bg-govuk-light-grey p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Get help and support</h2>
          <p className="mb-4">
            Use this form to ask a question, report a problem, or give feedback about our services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-govuk-dark-grey">0300 123 4567</p>
              <p className="text-sm text-govuk-mid-grey">Monday to Friday, 8am to 6pm</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Response Time</h3>
              <p className="text-govuk-dark-grey">Within 5 working days</p>
              <p className="text-sm text-govuk-mid-grey">For urgent matters, please call</p>
            </div>
          </div>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="govuk-error-summary mb-6" data-testid="error-summary">
            <h2 className="text-lg font-bold text-destructive mb-3">There is a problem</h2>
            <ul className="list-disc list-inside space-y-1">
              {Object.entries(errors).map(([field, error]) => (
                <li key={field} className="text-destructive">
                  <a href={`#${field}`} className="hover:underline">{error}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-semibold mb-2">What is your enquiry about?</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="enquiryType"
                  value="general"
                  checked={formData.enquiryType === "general"}
                  onChange={(e) => handleInputChange("enquiryType", e.target.value)}
                  className="mr-3"
                  data-testid="enquiry-type-general"
                />
                General enquiry
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="enquiryType"
                  value="technical"
                  checked={formData.enquiryType === "technical"}
                  onChange={(e) => handleInputChange("enquiryType", e.target.value)}
                  className="mr-3"
                  data-testid="enquiry-type-technical"
                />
                Technical problem
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="enquiryType"
                  value="complaint"
                  checked={formData.enquiryType === "complaint"}
                  onChange={(e) => handleInputChange("enquiryType", e.target.value)}
                  className="mr-3"
                  data-testid="enquiry-type-complaint"
                />
                Complaint
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="enquiryType"
                  value="feedback"
                  checked={formData.enquiryType === "feedback"}
                  onChange={(e) => handleInputChange("enquiryType", e.target.value)}
                  className="mr-3"
                  data-testid="enquiry-type-feedback"
                />
                Feedback or suggestion
              </label>
            </div>
          </div>

          <GovInput
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            error={errors.name}
            data-testid="name-input"
          />

          <GovInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={errors.email}
            data-testid="email-input"
          />

          <GovInput
            label="Phone Number (optional)"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            hint="We may need to contact you for more information"
            data-testid="phone-input"
          />

          <GovInput
            label="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            error={errors.subject}
            hint="Brief description of your enquiry"
            data-testid="subject-input"
          />

          <div className="mb-6">
            <label 
              htmlFor="message"
              className="block text-base font-semibold mb-2 text-foreground"
            >
              Message
            </label>
            
            {errors.message && (
              <div className="text-destructive text-sm font-semibold mb-2">
                <span className="inline-block mr-2">⚠</span>
                {errors.message}
              </div>
            )}
            
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`govuk-input w-full h-32 resize-vertical ${
                errors.message ? "border-destructive border-4" : ""
              }`}
              placeholder="Please provide as much detail as possible..."
              data-testid="message-input"
            />
            <div className="text-sm text-govuk-mid-grey mt-1">
              {formData.message.length}/2000 characters
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">How would you prefer us to contact you?</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                  className="mr-3"
                  data-testid="contact-preference-email"
                />
                Email
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                  className="mr-3"
                  data-testid="contact-preference-phone"
                />
                Phone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preferredContact"
                  value="either"
                  checked={formData.preferredContact === "either"}
                  onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                  className="mr-3"
                  data-testid="contact-preference-either"
                />
                Either email or phone
              </label>
            </div>
          </div>

          <GovButton 
            type="submit"
            size="large"
            data-testid="submit-contact-form"
          >
            Send Message
          </GovButton>
        </form>
      </div>
    </GovLayout>
  );
};

export default ContactPage;