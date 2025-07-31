import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovLayout from "@/components/GovLayout";
import GovButton from "@/components/GovButton";
import GovInput from "@/components/GovInput";
import { useToast } from "@/hooks/use-toast";

const LicenseService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    postcode: "",
    licenseType: "car",
    hasProvisional: "no",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
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
    if (!formData.address.trim()) {
      newErrors.address = "Enter your address";
    }
    if (!formData.postcode.trim()) {
      newErrors.postcode = "Enter your postcode";
    }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast({
        title: "Application Submitted",
        description: "Your driving license application has been submitted successfully. Reference: DL-2024-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
      });
      navigate("/confirmation/license");
    }
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
            <li className="text-govuk-black">Driving License</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-govuk-black">
          Driving License Application
        </h1>

        <div className="bg-govuk-light-blue text-white p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Before you start</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You must be at least 17 years old to apply for a car license</li>
            <li>You'll need a valid form of identification</li>
            <li>The application fee is £34 for online applications</li>
            <li>You'll receive your license within 3 weeks</li>
          </ul>
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
            <h2 className="text-xl font-semibold mb-4">License Type</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="licenseType"
                  value="car"
                  checked={formData.licenseType === "car"}
                  onChange={(e) => handleInputChange("licenseType", e.target.value)}
                  className="mr-3"
                  data-testid="license-type-car"
                />
                Car (Category B)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="licenseType"
                  value="motorcycle"
                  checked={formData.licenseType === "motorcycle"}
                  onChange={(e) => handleInputChange("licenseType", e.target.value)}
                  className="mr-3"
                  data-testid="license-type-motorcycle"
                />
                Motorcycle (Category A)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="licenseType"
                  value="lorry"
                  checked={formData.licenseType === "lorry"}
                  onChange={(e) => handleInputChange("licenseType", e.target.value)}
                  className="mr-3"
                  data-testid="license-type-lorry"
                />
                Lorry (Category C)
              </label>
            </div>
          </div>

          <h2 className="text-xl font-semibold">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <GovInput
            label="Date of Birth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            error={errors.dateOfBirth}
            data-testid="date-of-birth-input"
          />

          <h2 className="text-xl font-semibold">Address Details</h2>

          <GovInput
            label="Address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            error={errors.address}
            hint="Include house number/name and street"
            data-testid="address-input"
          />

          <GovInput
            label="Postcode"
            value={formData.postcode}
            onChange={(e) => handleInputChange("postcode", e.target.value)}
            error={errors.postcode}
            data-testid="postcode-input"
          />

          <div>
            <label className="block text-base font-semibold mb-2">Do you already have a provisional license?</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasProvisional"
                  value="yes"
                  checked={formData.hasProvisional === "yes"}
                  onChange={(e) => handleInputChange("hasProvisional", e.target.value)}
                  className="mr-3"
                  data-testid="has-provisional-yes"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasProvisional"
                  value="no"
                  checked={formData.hasProvisional === "no"}
                  onChange={(e) => handleInputChange("hasProvisional", e.target.value)}
                  className="mr-3"
                  data-testid="has-provisional-no"
                />
                No
              </label>
            </div>
          </div>

          <h2 className="text-xl font-semibold">Contact Information</h2>

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
            data-testid="phone-input"
          />

          <div className="bg-govuk-light-grey p-6">
            <h3 className="font-semibold mb-2">Declaration</h3>
            <p className="text-sm text-govuk-dark-grey">
              By submitting this application, you declare that the information provided is true and accurate. 
              You understand that providing false information is an offense and may result in prosecution.
            </p>
          </div>

          <GovButton 
            type="submit"
            size="large"
            data-testid="submit-license-application"
          >
            Submit Application
          </GovButton>
        </form>
      </div>
    </GovLayout>
  );
};

export default LicenseService;