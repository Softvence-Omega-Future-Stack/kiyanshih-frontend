import { useState } from "react"
import CommonWrapper from "@/common/space/CommonWrapper"
import PreferencesTab from "../userComponents/settings/PreferencesTab"
import NotificationTab from "../userComponents/settings/NotificationTab"
import SecurityTab from "../userComponents/settings/SecurityTab"
import PaymentMethodsTab from "../userComponents/settings/PaymentMethodsTab"
import SettingsTabs from "../userComponents/settings/SettingsTabs"

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState("preferences") // Changed from "security" to "preferences"

  const renderTabContent = () => {
    switch (activeTab) {
      case "preferences":
        return <PreferencesTab />
      case "notification":
        return <NotificationTab />
      case "security":
        return <SecurityTab />
      case "payment":
        return <PaymentMethodsTab />
      case "profile":
        return (
          <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
            Profile Settings content coming soon
          </div>
        )
      case "privacy":
        return (
          <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
            Privacy Policy content coming soon
          </div>
        )
      case "terms":
        return (
          <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
            Terms & Condition content coming soon
          </div>
        )
      default:
        return null
    }
  }

  return (
    <CommonWrapper>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </div>
    </CommonWrapper>
  )
}

export default UserSettings;