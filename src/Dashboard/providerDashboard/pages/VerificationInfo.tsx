import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogOut } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

// ✅ Zod schema
const profileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dateOfBirth: z.string().min(2, "Date of birth is required"),
  street: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  province: z.string().min(2, "Province is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Invalid email address"),

  businessName: z.string().min(2, "Business name is required"),
  licenceNumber: z.string().min(2, "Licence number is required"),
  insuranceProvider: z.string().min(2, "Insurance provider is required"),
  yearsOfExperience: z.string().min(1, "Years of experience is required"),
  aboutService: z.string().min(10, "Please provide details about your service"),

  consentBackground: z.boolean().refine((val) => val === true, {
    message: "You must consent to background checks",
  }),
  consentTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

// ✅ Infer type from schema
type ProfileFormData = z.infer<typeof profileSchema>;

export default function VerificationInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "Sarah",
      lastName: "Johnson",
      dateOfBirth: "1990-01-01",
      street: "123 Main Street",
      city: "Ontario",
      province: "Canada",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com",

      businessName: "Sarah's Care Services",
      licenceNumber: "LIC-123456",
      insuranceProvider: "ABC Insurance",
      yearsOfExperience: "5",
      aboutService: "I provide professional healthcare and support services.",

      consentBackground: false,
      consentTerms: false,
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile Data:", data);
  };

  return (
    <div className="mb-10">
      <div className="mb-5">
        <h2 className="text-2xl text-slate-700 font-semibold">
          Verification Information
        </h2>
        <p className="text-lg text-slate-700">
          Provide your personal and business details for verification
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white shadow border border-slate-300 rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  {...register("firstName")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  {...register("lastName")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Date of Birth</label>
                <input
                  type="date"
                  {...register("dateOfBirth")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-red-600">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Street Address</label>
                <input
                  {...register("street")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.street && (
                  <p className="text-sm text-red-600">
                    {errors.street.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">City</label>
                <input
                  {...register("city")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Province</label>
                <input
                  {...register("province")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.province && (
                  <p className="text-sm text-red-600">
                    {errors.province.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  {...register("phone")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  {...register("email")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="bg-white shadow border border-slate-300 rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-4">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Business Name</label>
                <input
                  {...register("businessName")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.businessName && (
                  <p className="text-sm text-red-600">
                    {errors.businessName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Licence Number</label>
                <input
                  {...register("licenceNumber")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.licenceNumber && (
                  <p className="text-sm text-red-600">
                    {errors.licenceNumber.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">
                  Insurance Provider
                </label>
                <input
                  {...register("insuranceProvider")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.insuranceProvider && (
                  <p className="text-sm text-red-600">
                    {errors.insuranceProvider.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">
                  Years of Experience
                </label>
                <input
                  type="number"
                  {...register("yearsOfExperience")}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.yearsOfExperience && (
                  <p className="text-sm text-red-600">
                    {errors.yearsOfExperience.message}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">About Service</label>
                <textarea
                  {...register("aboutService")}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-blue-50 bg-[#EFF6FF66] px-3 py-2"
                />
                {errors.aboutService && (
                  <p className="text-sm text-red-600">
                    {errors.aboutService.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="bg-white shadow border border-slate-300 rounded-lg p-5 space-y-4">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("consentBackground")}
                className="mt-1 h-4 w-4"
              />
              <label className="text-sm text-gray-700">
                I consent to background checks and verification of the
                information provided
              </label>
            </div>
            {errors.consentBackground && (
              <p className="text-sm text-red-600">
                {errors.consentBackground.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("consentTerms")}
                className="mt-1 h-4 w-4"
              />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Certn Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
            {errors.consentTerms && (
              <p className="text-sm text-red-600">
                {errors.consentTerms.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button
              type="button"
              className="w-36 px-4 py-4 h-auto bg-gray-900 text-white rounded-md"
            >
              <LogOut />
              Logout
            </Button>
            <Link to={"/provider-dashboard/upload-documents"}>
              <button
                type="submit"
                className="w-36 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              >
                Next Step
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
