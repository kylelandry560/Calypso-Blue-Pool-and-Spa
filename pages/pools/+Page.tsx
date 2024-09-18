import React from "react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Container, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  //replace #required-for-focus with the path and hopefully it'll work
  return (
    <>
      <Container size='sm'>
        <Drawer opened={opened} onClose={close} title="Pools">
        <>
          <NavLink
            href="#"
            label="First parent link"
            leftSection={<IconGauge size="1rem" stroke={1.5} />}
            childrenOffset={28}
          >
            <NavLink href="/spa" label="First child link" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
              <NavLink label="First child link" href="#required-for-focus" />
              <NavLink label="Second child link" href="#required-for-focus" />
              <NavLink label="Third child link" href="#required-for-focus" />
            </NavLink>
          </NavLink>

          <NavLink
            href="#required-for-focus"
            label="Second parent link"
            leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
            childrenOffset={28}
            defaultOpened
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
        </>
        </Drawer>

        <h2>Pools</h2>  

        <Button onClick={open}>Navigation</Button>

        <p>
        This should be Blog-like and Documentation-Like with a slight tinge of
        sales tactics, but not overbearingly. Preferably there should be a
        navigation drawer on the left.
        </p>
      </Container>
    </>
  );
}
