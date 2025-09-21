"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
}

interface ProfileDropdownProps {
  profileImg?: string;
  fallbackText?: string;
  items: DropdownItem[];
}

const CommonDropdown: React.FC<ProfileDropdownProps> = ({
  profileImg,
  fallbackText = "USER",
  items,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="ghost" className="gap-2 p-2">
          <Avatar className="h-8 w-8">
            {profileImg ? (
              <AvatarImage src={profileImg} />
            ) : (
              <AvatarFallback>{fallbackText}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-white border border-border min-w-[160px]"
      >
        {items.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            onClick={item.onClick}
            className="cursor-pointer hover:bg-gray-100"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommonDropdown;
