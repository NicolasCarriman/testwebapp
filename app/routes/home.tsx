import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "A ver test" },
    { name: "test description", content: "gigi" },
  ];
}

export default function Home() {
  return <Welcome />;
}
