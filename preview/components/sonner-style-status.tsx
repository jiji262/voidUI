import { Button } from "@/components/voidui";
import { toast } from "sonner";

export default function SonnerStyleStatus() {
  const onClick = () => {
    toast.success("Congrats man 🎉 (Plain)");
  };

  return <Button onClick={onClick}>Congratulate Me</Button>;
}
