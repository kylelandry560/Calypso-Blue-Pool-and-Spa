import React from "react";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import image from "../../assets/undraw_unboxing_pbmf.svg";

import classes from "./HeroBullets.module.css";

import { FeaturesCards } from "./FeaturesCards";

export function Page() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Expert Pool & Spa Solutions and Online Store
            <span className={classes.highlight}></span>
            <br />
          </Title>
          <Text c="dimmed" mt="md">
            We specialize in creating and maintaining stunning pools and spas
            that elevate your home
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Something about E- commerce</b> – build type safe applications,
              all components and hooks export types
            </List.Item>
            <List.Item>
              <b>Something about Pools and Spas</b> – all packages have MIT
              license, you can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>Something about service</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              changethis
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Schedule a call
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Check out our Store
            </Button>
          </Group>
        </div>
        <Image
          src={image}
          className={classes.image}
          style={{ width: "500px", height: "500px" }}
        />
      </div>

      <FeaturesCards />
    </Container>
  );
}
