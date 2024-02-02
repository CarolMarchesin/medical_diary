import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            Confirmado
          </Badge>

          <h2 className="font-bold">Dra. Carol</h2>
          <p className="text-sm">Dermatologista</p>
        </div>

        <div className="flex flex-col items-center justify-center px-5 border-l border-solid border-secondary">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">15</p>
          <p className="text-sm">10:00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
