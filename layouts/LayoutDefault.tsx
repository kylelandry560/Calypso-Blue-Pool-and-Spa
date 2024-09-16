import "@mantine/core/styles.css";
import "./tailwind.css";

import React from "react";
import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import theme from "./theme.js";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { MainHeader } from "./layout-components/MainHeader.jsx";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        // navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <MainHeader />
        </AppShell.Header>

        {/* Navbar that wont be used. If we use a navbar, it will be specific to the page, not global component. 
        <AppShell.Navbar p="md">
          <Link href="/" label="Welcome" />
          <Link href="/todo" label="Todo" />
          <Link href="/star-wars" label="Data Fetching" />
        </AppShell.Navbar> */}

        <AppShell.Main> {children} </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
