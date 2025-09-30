import React from "react";
import MediumHeader from "@/common/header/MediumHeader";
import CommonHeader from "@/common/header/CommonHeader";
import ButtonWithIcon from "@/common/button/ButtonWithIcon";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  button?: string;
  buttonLink?: string;
  text?: string;
}

const UserSectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  button,
  buttonLink,
  text,

  className = "",
}) => {
  return (
    <div
      className={` ${className} w-full flex items-center justify-between pb-6`}
    >
      <div>
        <MediumHeader className="mb-2 !text-[#0F172A] !font-semibold">
          {title}
        </MediumHeader>
        {subtitle && (
          <CommonHeader className="!text-[#334155]">{subtitle}</CommonHeader>
        )}
      </div>
      {button && (
        <Link to={buttonLink ?? "#"}>
          <ButtonWithIcon icon={Plus}>{button}</ButtonWithIcon>
        </Link>
      )}

      {text && (
        <MediumHeader className="!text-[#1D4ED8] underline !font-medium cursor-pointer">
          {text}
        </MediumHeader>
      )}
    </div>
  );
};

export default UserSectionHeader;
