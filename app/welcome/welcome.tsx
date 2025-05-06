import Navbar from "~/components/navbar";
import { Introduction } from "./components/introduction";
import { Statistics } from "./components/statitstics";
import { ScrollableLayout } from "./components/scroll";
import Product from "./components/product";

export function Welcome() {
  return (
    <ScrollableLayout
      head={<Navbar />}
    >
      <Introduction />
      <Statistics active={true} />
      <Product />
    </ScrollableLayout>
  );
}
