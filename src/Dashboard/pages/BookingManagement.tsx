import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, UserCheck, Calendar } from "lucide-react";

const analyticsData = [
  {
    title: "Total earning",
    value: "80,190.15$",
    icon: DollarSign,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Total subscription",
    value: "25",
    icon: Users,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Total Provider",
    value: "3",
    icon: UserCheck,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Total booking served",
    value: "33",
    icon: Calendar,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const BookingManagement = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {analyticsData.map((item, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </p>
                <p className="text-2xl font-bold text-balance">{item.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${item.bgColor}`}>
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookingManagement;
