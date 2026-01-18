import { Button } from "@/components/voidui";
import { toast } from "sonner";

export default function SonnerStyleRichColors() {
  const onClick = () => {
    toast.success("Congrats man (Colored) 🎉", {
      richColors: true,
    });
  };

  return <Button onClick={onClick}>Congratulate Me</Button>;
}
