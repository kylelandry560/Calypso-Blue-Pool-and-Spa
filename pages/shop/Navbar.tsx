import React from "react";
import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconAsset,
} from "@tabler/icons-react";
import { UserButton } from "../../components/UserButton";
import { LinksGroup } from "../../components/NavbarLinksGroup"
import classes from "./NavbarNested.module.css";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Pool",
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: "Balancing Chemicals", link: "/" },
      { label: "Chlorine Sanitizers", link: "/" },
      { label: "Baquacil", link: "/" },
      { label: "Frog System", link: "/" },
      { label: "Accessories", link: "/" },
    ],
  },
  {
    label: "Spa",
    icon: IconCalendarStats,
    links: [
      { label: "Balancing Chemicals", link: "/" },
      { label: "Chlorine Sanitizers", link: "/" },
      { label: "Baquacil", link: "/" },
      { label: "Frog System", link: "/" },
      { label: "Accessories", link: "/" },
    ],
  },

  { label: "Cart", icon: IconAsset },
  /*
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },*/
];

export function Navbar() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

    </nav>
  );
}
