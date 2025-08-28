import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Sentence</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Word</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Saved cards</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}
