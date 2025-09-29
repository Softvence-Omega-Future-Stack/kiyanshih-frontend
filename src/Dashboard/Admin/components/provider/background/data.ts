import img from "@/assets/images/man.png";

export interface BackgroundProvider {
  sl: number;
  providerName: string;
  rating: number;
  avatar?: string;
  contactPhone: string;
  contactEmail: string;
  insuranceNumber: number;
  isAvailable: boolean;
}

export const background: BackgroundProvider[] = [
  {
    sl: 1,
    providerName: "John Doe",
    rating: 4.5,
    avatar: img,
    contactPhone: "+880123456789",
    contactEmail: "john@example.com",
    insuranceNumber: 1202445221,
    isAvailable: true,
  },
  {
    sl: 2,
    providerName: "Jane Smith",
    rating: 4.2,
    avatar: img,
    contactPhone: "+880987654321",
    contactEmail: "jane@example.com",
    insuranceNumber: 1202445222,
    isAvailable: false,
  },
  {
    sl: 3,
    providerName: "Mike Johnson",
    rating: 4.8,
    avatar: img,
    contactPhone: "+880112233445",
    contactEmail: "mike@example.com",
    insuranceNumber: 1202445223,
    isAvailable: true,
  },
  {
    sl: 4,
    providerName: "Emily Davis",
    rating: 4.1,
    avatar: img,
    contactPhone: "+880556677889",
    contactEmail: "emily@example.com",
    insuranceNumber: 1202445224,
    isAvailable: true,
  },
  {
    sl: 5,
    providerName: "Robert Brown",
    rating: 3.9,
    avatar: img,
    contactPhone: "+880667788990",
    contactEmail: "robert@example.com",
    insuranceNumber: 1202445225,
    isAvailable: false,
  },
  {
    sl: 6,
    providerName: "Linda Wilson",
    rating: 4.6,
    avatar: img,
    contactPhone: "+880223344556",
    contactEmail: "linda@example.com",
    insuranceNumber: 1202445226,
    isAvailable: true,
  },
  {
    sl: 7,
    providerName: "David Miller",
    rating: 4.3,
    avatar: img,
    contactPhone: "+880334455667",
    contactEmail: "david@example.com",
    insuranceNumber: 1202445227,
    isAvailable: false,
  },
  {
    sl: 8,
    providerName: "Sarah Taylor",
    rating: 4.7,
    avatar: img,
    contactPhone: "+880445566778",
    contactEmail: "sarah@example.com",
    insuranceNumber: 1202445228,
    isAvailable: true,
  },
  {
    sl: 9,
    providerName: "Chris Anderson",
    rating: 4.0,
    avatar: img,
    contactPhone: "+880556677889",
    contactEmail: "chris@example.com",
    insuranceNumber: 1202445229,
    isAvailable: false,
  },
  {
    sl: 10,
    providerName: "Patricia Thomas",
    rating: 4.9,
    avatar: img,
    contactPhone: "+880667788990",
    contactEmail: "patricia@example.com",
    insuranceNumber: 1202445230,
    isAvailable: true,
  },
];
