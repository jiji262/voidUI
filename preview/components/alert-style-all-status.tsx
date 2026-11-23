import { Alert } from "@/components/voidui/Alert";
import { CheckCircle, InfoIcon, XIcon } from "lucide-react";

export default function AlertAllStatus() {
  return (
    <div className="space-y-4">
      <Alert variant="success" className="flex items-center">
        <CheckCircle className="h-4 w-4 mr-4" />
        <Alert.Title>This is a success alert!</Alert.Title>
      </Alert>
      <Alert variant="info" className="flex items-center">
        <InfoIcon className="h-4 w-4 mr-4" />
        <Alert.Title>This is an info alert!</Alert.Title>
      </Alert>
      <Alert variant="destructive" className="flex items-center">
        <XIcon className="h-4 w-4 mr-4" />
        <Alert.Title>This is an error alert!</Alert.Title>
      </Alert>
      <Alert variant="warning" className="flex items-center">
        <InfoIcon className="h-4 w-4 mr-4" />
        <Alert.Title>This is an error alert!</Alert.Title>
      </Alert>
    </div>
  );
}
