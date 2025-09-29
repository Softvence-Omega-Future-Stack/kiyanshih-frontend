import { useState } from "react";
import CommonWrapper from "@/common/space/CommonWrapper";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import MobileMenu from "@/components/navbar/MobileMenu";
import JoinModal from "@/components/navbar/JoinModal";
import profile from "@/assets/images/profilekian.png";



const UserNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const notificationCount = 3; // This should come from your state/props
    const userName = "Charlotte Davis"; // This should come from your user data

    return (
        <header className="bg-[#EFF6FF] border-b border-gray-100 py-[14px]">
            <CommonWrapper>
                <div className="w-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="w-[132px] h-[52px]">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-x-6">
                        {/* Notification Bell */}
                        <div className="relative cursor-pointer">
                            <FaRegBell className="text-blue-700 w-[28px] h-[30px]" />
                            {notificationCount > 0 && (
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[24px] h-6 flex items-center justify-center px-1">
                                    {notificationCount > 99 ? "99+" : notificationCount}
                                </div>
                            )}
                        </div>

                        {/* Welcome Text and Avatar */}
                        <div className="flex items-center space-x-3">
                            <div className="text-right">
                                <div className="text-lg font-semibold text-[#0F172A]">Welcome Back!</div>
                                <div className="text-sm md:text-[16px] text-[#334155]">{userName}</div>
                            </div>
                            <Avatar className="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]">
                                <AvatarImage src={profile} alt={userName} />
                                <AvatarFallback className="bg-gray-300 text-gray-700">
                                    {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden h-10 w-10 p-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </CommonWrapper>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <MobileMenu
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}

            {/* Join Modal */}
            <JoinModal open={isJoinModalOpen} onOpenChange={setIsJoinModalOpen} />
        </header>
    );
};

export default UserNavbar;