import image from "@/assets/frame/p1.svg";
import InfoSection from "../InfoSection";
import type React from "react";
import { useState } from "react";
import CommonHeader from "@/common/header/CommonHeader";
import PlanSelector from "@/common/custom/PlanSelector";

const Budget = () => {
  const [budgetType, setBudgetType] = useState<"quotes" | "fixed">("quotes");
  const [budget, setBudget] = useState("200");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", { budgetType, budget });
  };

  const inputClass = {
    input:
      "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35  outline-none transition",
    label:
      "text-sm lg:text-base text-[#2D2D2D] font-medium font-Geist leading-[24px] block mb-2",
  };

  return (
    <div>
      <InfoSection
        image={image}
        title="Set Your Budget"
        subtitle="Choose how you'd like to handle pricing for this project. This helps professionals provide accurate quotes."
      />

      <PlanSelector
        value={budgetType}
        onChange={(val) => setBudgetType(val as "quotes" | "fixed")}
        options={[
          { label: "Get quotes From Professional", value: "quotes" },
          { label: "Fixed Budget", value: "fixed" },
        ]}
      />

      <form onSubmit={handleSubmit} className="space-y-5 pt-5">
        {budgetType === "quotes" && (
          <div className="space-y-6">
            <div>
              <CommonHeader className="!text-xl font-semibold mb-1">
                Hourly rate
              </CommonHeader>
              <p className="text-sm text-muted-foreground">
                Pay by the hour with an agreed hourly rate
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className={inputClass.label}>
                Budget <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  id="budget"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  className={inputClass.input}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  /hour
                </span>
              </div>
            </div>
          </div>
        )}

        {budgetType === "fixed" && (
          <div className="space-y-6">
            <div>
              <CommonHeader className="!text-xl font-semibold mb-1">
                Fixed Budget
              </CommonHeader>
              <p className="text-sm text-muted-foreground">
                Set a fixed price for the whole project
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="fixedBudget" className={inputClass.label}>
                Budget <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <input
                  id="fixedBudget"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  className={`px-4 ${inputClass.input}`}
                />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Budget;
