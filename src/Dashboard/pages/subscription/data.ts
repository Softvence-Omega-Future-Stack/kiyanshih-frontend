import img from "@/assets/images/man.png";

export interface Subscription {
  sl: number;
  userName: string;
  avatar?: string;
  contactPhone: string;
  contactEmail: string;
  subscription: number;
  plain: "Basic" | "Unlimited";
  verification: "Complete" | "Not Yet";
}

export const SubscriptionData: Subscription[] = [
  {
    sl: 1,
    userName: "Alice Johnson",
    avatar: img,
    contactPhone: "+880111111111",
    contactEmail: "alice@example.com",
    subscription: 5,
    plain: "Unlimited",

    verification: "Complete",
  },
  {
    sl: 2,
    userName: "Bob Smith",
    avatar: img,
    contactPhone: "+880222222222",
    contactEmail: "bob@example.com",
    subscription: 3,
    plain: "Basic",

    verification: "Complete",
  },
  {
    sl: 3,
    userName: "Charlie Brown",
    avatar: img,
    contactPhone: "+880333333333",
    contactEmail: "charlie@example.com",
    subscription: 7,
    plain: "Unlimited",

    verification: "Not Yet",
  },
  {
    sl: 4,
    userName: "Diana Prince",
    avatar: img,
    contactPhone: "+880444444444",
    contactEmail: "diana@example.com",
    subscription: 2,
    plain: "Basic",

    verification: "Complete",
  },
  {
    sl: 5,
    userName: "Ethan Hunt",
    avatar: img,
    contactPhone: "+880555555555",
    contactEmail: "ethan@example.com",
    subscription: 6,
    plain: "Unlimited",

    verification: "Not Yet",
  },
  {
    sl: 6,
    userName: "Fiona Gallagher",
    avatar: img,
    contactPhone: "+880666666666",
    contactEmail: "fiona@example.com",
    subscription: 4,
    plain: "Basic",

    verification: "Complete",
  },
  {
    sl: 7,
    userName: "George Miller",
    avatar: img,
    contactPhone: "+880777777777",
    contactEmail: "george@example.com",
    subscription: 8,
    plain: "Unlimited",

    verification: "Not Yet",
  },
  {
    sl: 8,
    userName: "Hannah Lee",
    avatar: img,
    contactPhone: "+880888888888",
    contactEmail: "hannah@example.com",
    subscription: 10,
    plain: "Basic",

    verification: "Complete",
  },
  {
    sl: 9,
    userName: "Ian Wright",
    avatar: img,
    contactPhone: "+880999999999",
    contactEmail: "ian@example.com",
    subscription: 9,
    plain: "Unlimited",

    verification: "Complete",
  },
  {
    sl: 10,
    userName: "Jasmine Taylor",
    avatar: img,
    contactPhone: "+880101010101",
    contactEmail: "jasmine@example.com",
    subscription: 12,
    plain: "Basic",

    verification: "Not Yet",
  },
];
