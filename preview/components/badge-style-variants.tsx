import { Badge } from "@/components/voidui/Badge";

export default function BadgeStyleVariants() {
  return (
    <div className="space-x-4">
      <Badge variant="outline">Outlined</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="surface">Surface</Badge>
    </div>
  );
}
