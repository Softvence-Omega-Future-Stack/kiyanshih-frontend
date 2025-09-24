// ProviderList.tsx
import { useState } from "react";
import {
  providers as initialProviders,
  type Provider,
} from "@/Dashboard/components/provider/providerList/data";
import ProviderTable from "@/Dashboard/components/provider/providerList/ProviderTable";
import ProviderTopSection from "@/Dashboard/components/provider/providerList/ProviderTopSection";

const ProviderList = () => {
  const [providers, setProviders] = useState<Provider[]>(initialProviders);

  const handleToggleAvailability = (provider: Provider) => {
    setProviders((prev) =>
      prev.map((p) =>
        p.sl === provider.sl ? { ...p, isAvailable: !p.isAvailable } : p
      )
    );
  };

  const handleDelete = (provider: Provider) => {
    setProviders((prev) => prev.filter((p) => p.sl !== provider.sl));
  };

  return (
    <div>
      <ProviderTopSection />
      <ProviderTable
        providers={providers}
        onToggleAvailability={handleToggleAvailability}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProviderList;
