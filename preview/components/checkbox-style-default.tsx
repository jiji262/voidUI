import { Checkbox } from "@/components/voidui/Checkbox";
import { Text } from "@/components/voidui/Text";

export default function CheckboxStyleDefault() {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <Text>Accept terms and conditions</Text>
    </div>
  );
}
