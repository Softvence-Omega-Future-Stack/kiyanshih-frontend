import BackgroundCheckTop from "@/Dashboard/components/provider/background/BackgroundCheckTop";
import BackgroundTable from "@/Dashboard/components/provider/background/BackgroundTable";
import { useState } from "react";
import { background as initialProviders } from "@/Dashboard/components/provider/background/data";
import type { BackgroundProvider } from "@/Dashboard/components/provider/background/data";
import ProfileCard from "@/Dashboard/components/provider/background/ProfileCard";
const BackgroundCheck = () => {
  const [providers, setProviders] =
    useState<BackgroundProvider[]>(initialProviders);
  const [selectedProvider, setSelectedProvider] =
    useState<BackgroundProvider | null>(null);

  const handleToggleAvailability = (provider: BackgroundProvider) => {
    setSelectedProvider(provider);
  };

  const handleDelete = (provider: BackgroundProvider) => {
    setProviders((prev) => prev.filter((p) => p.sl !== provider.sl));
  };
  return (
    <div>
      <BackgroundCheckTop />

      {selectedProvider ? (
        <ProfileCard
          selectedProvider={selectedProvider}
          setSelectedProvider={setSelectedProvider}
        />
      ) : (
        <>
          <BackgroundTable
            providers={providers}
            onDelete={handleDelete}
            handleToggleAvailability={handleToggleAvailability}
          />
        </>
      )}
    </div>
  );
};

export default BackgroundCheck;
