import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

// ---------- Validation Schema ----------
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const fileSchema = z
  .custom<File>((val) => val instanceof File, {
    message: "File is required",
  })
  .refine((file) => file.size <= MAX_FILE_SIZE, "File must be under 10MB")
  .refine(
    (file) => ACCEPTED_FILE_TYPES.includes(file.type),
    "Only PDF, JPG, PNG are allowed"
  );

const uploadSchema = z.object({
  serviceCategory: z.string().min(1, "Please select a service category"),

  govtId: fileSchema,
  businessLicence: fileSchema,
  insuranceCertificate: fileSchema,

  additionalCertificate: z
    .custom<File | undefined>()
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "File must be under 10MB"
    )
    .refine(
      (file) => !file || ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PDF, JPG, PNG are allowed"
    ),
});

type UploadFormData = z.infer<typeof uploadSchema>;

// ---------- File Upload Component ----------
interface FileUploadProps {
  label: string;
  description: string;
  required?: boolean;
  onChange: (file?: File) => void;
  error?: string;
}

function FileUploadField({
  label,
  description,
  required,
  onChange,
  error,
}: FileUploadProps) {
  return (
    <div className="space-y-2 flex flex-col h-full">
      {/* Label + Description */}
      <div className="flex flex-col mb-5">
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <p className="text-xs text-gray-500 leading-snug break-words">
          {description}
        </p>
      </div>

      {/* Upload box */}
      <div className="flex-1 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[120px]">
        <div className="text-sm text-gray-400 mb-2 text-center">
          Please upload PDF, JPG, PNG up to 10MB
        </div>
        <input
          type="file"
          onChange={(e) => onChange(e.target.files?.[0])}
          className="text-sm w-full file:mr-3 file:rounded-md file:border file:border-gray-300 
                     file:bg-white file:px-3 file:py-1.5 file:text-sm 
                     file:font-medium file:text-gray-700 hover:file:bg-gray-50"
        />
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

// ---------- Main Form ----------
export default function UploadDocuments() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UploadFormData>({
    resolver: zodResolver(uploadSchema),
  });

  const onSubmit = (data: UploadFormData) => {
    console.log("Form submitted:", data);

    // Example: FormData to send files to backend
    const formData = new FormData();
    formData.append("serviceCategory", data.serviceCategory);
    formData.append("govtId", data.govtId);
    formData.append("businessLicence", data.businessLicence);
    formData.append("insuranceCertificate", data.insuranceCertificate);
    if (data.additionalCertificate) {
      formData.append("additionalCertificate", data.additionalCertificate);
    }

    // fetch("/api/upload", { method: "POST", body: formData });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-semibold text-slate-700">
            Upload Documents & Licenses
          </h2>
          <p className="text-lg text-gray-700">
            Upload your professional documents to complete verification. These
            help build trust with clients.
          </p>
        </div>

        {/* Info Box */}
        <div className="border border-slate-300 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
          All documents are securely stored and only used for verification
          purposes. You can upload additional certifications to showcase your
          expertise.
        </div>

        {/* Service Category */}
        <div className="w-full md:w-1/2">
          <label className="text-sm font-medium text-gray-700">
            Provide Services Category
          </label>
          <Select onValueChange={(value) => setValue("serviceCategory", value)}>
            <SelectTrigger className="mt-1 w-full border border-slate-300">
              <SelectValue placeholder="Select your service category" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-slate-300">
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceCategory && (
            <p className="text-sm text-red-600">
              {errors.serviceCategory.message}
            </p>
          )}
        </div>

        {/* Required Docs */}
        <h3 className="text-md font-semibold text-gray-700">
          Required Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <Controller
            control={control}
            name="govtId"
            render={({ field }) => (
              <FileUploadField
                label="Govt issue ID"
                description="Upload a clear photo of your driver’s license, passport, or ID card"
                required
                onChange={field.onChange}
                error={errors.govtId?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="businessLicence"
            render={({ field }) => (
              <FileUploadField
                label="Business licence"
                description="Municipal business license or registration"
                required
                onChange={field.onChange}
                error={errors.businessLicence?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="insuranceCertificate"
            render={({ field }) => (
              <FileUploadField
                label="Insurance Certificate"
                description="Liability insurance or bonding certificate"
                required
                onChange={field.onChange}
                error={errors.insuranceCertificate?.message}
              />
            )}
          />

          <div>
            <Controller
              control={control}
              name="additionalCertificate"
              render={({ field }) => (
                <FileUploadField
                  label="Additional Certificate (Optional)"
                  description="Upload any additional certificates, awards, or credentials"
                  onChange={field.onChange}
                  error={errors.additionalCertificate?.message}
                />
              )}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to={"/provider-dashboard/background-check-payment"}>
            <Button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-md cursor-pointer"
            >
              Continue to Payment
            </Button>
          </Link>
          <Button
            type="button"
            variant="outline"
            className="px-6 py-3 rounded-md cursor-pointer"
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
