import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/voidui/Tab";

export default function TabStyleDefault() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        Welcome to voidUI, a void styled UI library built with React,
        Tailwind CSS & Radix UI.
      </TabsContent>
      <TabsContent value="about">This is the about section!</TabsContent>
      <TabsContent value="contact">And, this is the contact section!</TabsContent>
    </Tabs>
  );
}
