/* eslint-disable prettier/prettier */
import React from "react";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSquareRotated,
  IconCode,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./MainHeader.module.css";
import { Link } from "../../components/Link";

interface MockData {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const pools_mockdata = [
  {
    icon: IconSquareRotated,
    title: "Brand 1",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconSquareRotated,
    title: "Brand 2",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconSquareRotated,
    title: "Brand 3",
    description: "Yanma is capable of seeing 360 degrees without",
  },
];

const spas_mockdata = [
  {
    icon: IconSquareRotated,
    title: "Brand 1",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconSquareRotated,
    title: "Brand 2",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconSquareRotated,
    title: "Brand 3",
    description: "Yanma is capable of seeing 360 degrees without",
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const returnDropDownLinks = (mockdata: MockData[]) => {
    return mockdata.map((item) => {
      return (
        <UnstyledButton
          key={item.title}
          style={{ display: "block", marginBottom: "1rem" }}
        >
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={10} variant="white" radius="md">
              <item.icon
                style={{ width: 10, height: 10, color: theme.colors.blue[6] }}
              />
            </ThemeIcon>
            <div>
              <Text size="sm" fw={500}>
                {item.title}
              </Text>
              <Text size="xs" c="dimmed">
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      );
    });
  };

  return (
    <Box>
      <div className={classes.header}>
        <Group justify="space-between" h="100%">
          <IconCode size={60} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>

            <HoverCard
              width={400}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="/pools" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Pools
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Pools</Text>
                  <Anchor href="/pools" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                {/* change col={2} if you want a 2 by x grid */}
                <SimpleGrid cols={1} spacing={0}>
                  {returnDropDownLinks(pools_mockdata)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Let us help
                      </Text>
                      <Text size="xs" c="dimmed">
                        From estimates, installation, to everything else
                        inbetween
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={400}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="/spas" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Spas
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Spas</Text>
                  <Anchor href="/spas" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={1} spacing={0}>
                  {returnDropDownLinks(spas_mockdata)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Let us help
                      </Text>
                      <Text size="xs" c="dimmed">
                        From estimates, installation, to everything else
                        inbetween
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="/shop" className={classes.link}>
              Shop
            </a>

            <a href="/about" className={classes.link}>
              About
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </div>

      {/* FULL SCREEN NAVIGATION FOR SMALL SCREENS */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Pools
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {returnDropDownLinks(pools_mockdata)}
          </Collapse>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Spas
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {returnDropDownLinks(spas_mockdata)}
          </Collapse>

          <a href="/shop" className={classes.link}>
            Shop
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
