import { Tabs, TabsPanels, TabsTrigger, TabsContent, TabsTriggerList } from "@/components/voidui/Tab";

export default function TabStyleDefault() {
  return (
    <Tabs>
      <TabsTriggerList>
        <TabsTrigger>Home</TabsTrigger>
        <TabsTrigger>About</TabsTrigger>
        <TabsTrigger>Contact</TabsTrigger>
      </TabsTriggerList>
      <TabsPanels>
        <TabsContent>
          Welcome to VoidUI, a void styled UI library built with React,
          Tailwind CSS & Headless UI.
        </TabsContent>
        <TabsContent>This is the about section!</TabsContent>
        <TabsContent>And, this is the contact section!</TabsContent>
      </TabsPanels>
    </Tabs>
  );
}
