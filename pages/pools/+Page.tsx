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
        <Button onClick={open}>Navigation</Button>
        <Drawer opened={opened} onClose={close} title="Pools">
        <>
          <NavLink
            href="/index/+Page.tsx"
            label="Home"
            leftSection={<IconGauge size="1rem" stroke={1.5} />}
            childrenOffset={28}
          >
            <NavLink href="/spas/+Page.tsx" label="Spas" />
            <NavLink label="Second child link" href="#Navbar.tsx" />
            <NavLink label="Nested parent link" childrenOffset={28} href="#Navbar.tsx">
              <NavLink label="First child link" href="#Navbar.tsx" />
              <NavLink label="Second child link" href="#Navbar.tsx" />
              <NavLink label="Third child link" href="#Navbar.tsx" />
            </NavLink>
          </NavLink>
          
          <NavLink
            href="Navbar.tsx"
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
        

        <h1 style={{ fontSize: '48px', textAlign: 'center' }}> Pools </h1>  
        
        
        
        
        {/* This should be Blog-like and Documentation-Like with a slight tinge of sales tactics, but not overbearingly. 
        Preferably there should be a navigation drawer on the left.*/}
    
        <div style={{textAlign: 'right' &&'justify'}}>

        <h2 style= {{fontSize: '30px'}}> INGROUND POOLS </h2>
        
        <br></br>
        
        <p>
        &ensp; We install structural armor vinyl liner pools manufactured by Only Alpa Pool Products, an American manufacturer
        that has developed a continuous fiber-reinforced composite wall system that provides unparalleled strength with a 
        transferable LIFETIME warranty.
        </p>
        <br></br>
        <p>
        For more information on this innovative manufacturer, go to <a href= "https://www.onlyalpha.com/" style = {{color: 'blue'}} target = "_blank" rel = "noopener noreferrer"> www.onlyalpha.com </a>
        </p>

        <br></br>

        <p>
        For more information on fiber reinforced composites, visit <a href= "https://www.onlystructuralarmor.com/advanced-entry-systems.html" style = {{color: 'blue'}} target = "_blank" rel = "noopener noreferrer"> www.onlystructuralarmor.com </a>
        </p>
        <br></br>
        <h3 style= {{fontSize: '30px'}}> ABOVE GROUND POOLS </h3>

        <br></br>

        <p>
            &ensp; In 1945 our installation company, Tolis and Associates, started by installing pools for many retailers in Connecticut. Since that time we have installed thousands of pools from all manufacturers. 
            We now have our own store, Calypso Blue Pool, through which we choose to sell the pools that we feel are best designed to last and look good for many years. 
            Some even come with a lifetime warranty. Certain models and brands are better for certain sites and installation specifications. Visit the <a href= "" style = {{color: 'blue'}} target = "_blank" rel = "noopener noreferrer"> Our Work </a>
            page to see many different types of installations we have completed and feel free to email, call, or stop by our store to find some options that would best suit your project.
        </p>
        </div>
      </Container>
    </>
  );
}
