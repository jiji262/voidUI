import { Alert } from "@/components/voidui/Alert";

export default function AlertStyleDefault() {
  return (
    <Alert variant="default">
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>
        This is where you can write description that no one reads...
      </Alert.Description>
    </Alert>
  );
}
