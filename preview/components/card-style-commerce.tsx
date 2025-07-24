import Image from "next/image";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";

export default function CommerceCard() {
  return (
    <Card className="w-[350px] shadow-none hover:shadow-none">
      <Card.Content className="pb-0">
        <Image
          src="/images/gameboy.jpg"
          width={350}
          height={350}
          className="w-full h-full"
          alt="Gameboy"
        />
      </Card.Content>
      <Card.Header className="pb-0">
        <Card.Title>Classic 8-bit Gameboy</Card.Title>
      </Card.Header>
      <Card.Content className="flex justify-between items-center">
        <p className="text-lg font-semibold">$29.90</p>
        <Button>Add to cart</Button>
      </Card.Content>
    </Card>
  );
}
