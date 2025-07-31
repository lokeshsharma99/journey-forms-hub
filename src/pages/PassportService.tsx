import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";
import GovInput from "@/components/GovInput";
import { useToast } from "@/hooks/use-toast";

const PassportService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    serviceType: "renewal"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Enter your first name";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Enter your last name";
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Enter your date of birth";
    }
    if (!formData.nationality.trim()) {
      newErrors.nationality = "Enter your nationality";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Enter your phone number";
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

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted",
      description: "Your passport application has been submitted successfully. Reference: PS-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    });
    navigate("/confirmation/passport");
  };

  return (
    <GovLayout>
      <div className="max-w-2xl">
        <nav className="mb-6">
          <ol className="flex text-sm text-govuk-mid-grey">
            <li><a href="/" className="hover:text-govuk-blue">Home</a></li>
            <li className="mx-2">&gt;</li>
            <li><a href="/services" className="hover:text-govuk-blue">Services</a></li>
            <li className="mx-2">&gt;</li>
            <li className="text-govuk-black">Passport Services</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-govuk-black">
          Passport Application
        </h1>

        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep >= 1 ? 'bg-govuk-blue text-white' : 'bg-govuk-light-grey text-govuk-dark-grey'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 ${currentStep >= 2 ? 'bg-govuk-blue' : 'bg-govuk-light-grey'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep >= 2 ? 'bg-govuk-blue text-white' : 'bg-govuk-light-grey text-govuk-dark-grey'
            }`}>
              2
            </div>
            <div className={`flex-1 h-1 ${currentStep >= 3 ? 'bg-govuk-blue' : 'bg-govuk-light-grey'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep >= 3 ? 'bg-govuk-blue text-white' : 'bg-govuk-light-grey text-govuk-dark-grey'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span>Personal Details</span>
            <span>Contact Information</span>
            <span>Review & Submit</span>
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

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            
            <div className="mb-4">
              <label className="block text-base font-semibold mb-2">Service Type</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="serviceType"
                    value="new"
                    checked={formData.serviceType === "new"}
                    onChange={(e) => handleInputChange("serviceType", e.target.value)}
                    className="mr-3"
                    data-testid="service-type-new"
                  />
                  Apply for first adult passport
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="serviceType"
                    value="renewal"
                    checked={formData.serviceType === "renewal"}
                    onChange={(e) => handleInputChange("serviceType", e.target.value)}
                    className="mr-3"
                    data-testid="service-type-renewal"
                  />
                  Renew adult passport
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="serviceType"
                    value="replacement"
                    checked={formData.serviceType === "replacement"}
                    onChange={(e) => handleInputChange("serviceType", e.target.value)}
                    className="mr-3"
                    data-testid="service-type-replacement"
                  />
                  Replace lost or stolen passport
                </label>
              </div>
            </div>

            <GovInput
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              error={errors.firstName}
              data-testid="first-name-input"
            />

            <GovInput
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              error={errors.lastName}
              data-testid="last-name-input"
            />

            <GovInput
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              error={errors.dateOfBirth}
              data-testid="date-of-birth-input"
            />

            <GovInput
              label="Nationality"
              value={formData.nationality}
              onChange={(e) => handleInputChange("nationality", e.target.value)}
              error={errors.nationality}
              hint="For example, British, Irish, American"
              data-testid="nationality-input"
            />

            <div className="flex space-x-4">
              <GovButton 
                onClick={handleNext}
                data-testid="continue-step-1"
              >
                Continue
              </GovButton>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <GovInput
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
              hint="We'll use this to send you updates about your application"
              data-testid="email-input"
            />

            <GovInput
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              error={errors.phone}
              hint="We may need to contact you about your application"
              data-testid="phone-input"
            />

            <div className="flex space-x-4">
              <GovButton 
                variant="secondary"
                onClick={() => setCurrentStep(1)}
                data-testid="back-step-2"
              >
                Back
              </GovButton>
              <GovButton 
                onClick={handleNext}
                data-testid="continue-step-2"
              >
                Continue
              </GovButton>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Review Your Application</h2>
            
            <div className="bg-govuk-light-grey p-6">
              <h3 className="font-semibold mb-3">Application Summary</h3>
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-1/3 font-medium">Service Type:</dt>
                  <dd className="w-2/3 capitalize">{formData.serviceType.replace('-', ' ')}</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 font-medium">Full Name:</dt>
                  <dd className="w-2/3">{formData.firstName} {formData.lastName}</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 font-medium">Date of Birth:</dt>
                  <dd className="w-2/3">{formData.dateOfBirth}</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 font-medium">Nationality:</dt>
                  <dd className="w-2/3">{formData.nationality}</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 font-medium">Email:</dt>
                  <dd className="w-2/3">{formData.email}</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 font-medium">Phone:</dt>
                  <dd className="w-2/3">{formData.phone}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-govuk-light-blue text-white p-4">
              <h3 className="font-semibold mb-2">Declaration</h3>
              <p className="text-sm">
                By submitting this application, you declare that the information provided is true and accurate to the best of your knowledge.
              </p>
            </div>

            <div className="flex space-x-4">
              <GovButton 
                variant="secondary"
                onClick={() => setCurrentStep(2)}
                data-testid="back-step-3"
              >
                Back
              </GovButton>
              <GovButton 
                onClick={handleSubmit}
                data-testid="submit-application"
              >
                Submit Application
              </GovButton>
            </div>
          </div>
        )}
      </div>
    </GovLayout>
  );
};

export default PassportService;