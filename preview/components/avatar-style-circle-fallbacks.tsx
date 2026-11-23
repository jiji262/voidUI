import { Avatar } from "@/components/voidui/Avatar";

export default function AvatarStyleFallback() {
  return (
    <Avatar>
      <Avatar.Image src="/demo/images/non-existent-avatar.jpg" alt="Arif Logs" />
      <Avatar.Fallback>AH</Avatar.Fallback>
    </Avatar>
  );
}
