import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, useMantineTheme } from '@mantine/core';

export default function Navbar () {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer opened={opened} onClose={close} title="Authentication">
          hello
        </Drawer>
  
        <Button onClick={open}>Open Drawer</Button>
      </>
    )
}