import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";

interface ShoopItemProps {
  barbershop: Barbershop;
}

const ShoopItem = ({ barbershop }: ShoopItemProps) => {
  return (
    <Card className="p-0">
      <CardContent>
        <h1>{barbershop.name}</h1>
      </CardContent>
    </Card>
  );
};

export default ShoopItem;
