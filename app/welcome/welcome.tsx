import { useCallback, useEffect, useRef, useState, type UIEventHandler, type WheelEvent, type WheelEventHandler } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { items, type Item } from "./items";
import { ListComponent } from "./components/list";
import { data } from "react-router";
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
