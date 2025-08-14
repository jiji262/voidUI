/** @jsxImportSource react */
import { redirect } from "next/navigation";

export default function ComponentsRedirect() {
  // Redirect permanently to the new Showcase
  redirect("/showcase");
}