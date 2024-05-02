import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarItem,
    NavbarMenuItem,
    Link, Button, Autocomplete, AutocompleteItem
} from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import LightBulb from "./LightBulb";
import {useLocation} from '@remix-run/react';
import Football from "~/components/Football";

export default function NavBar () {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const location = useLocation();

    function handleThemeChange() {
        let newTheme = 'light'
        if (theme === 'light') {
            newTheme = 'dark'
        }
        setTheme(newTheme)
    }

    if(!mounted) return null

    const menuItems = [
        {
            label: "Home",
            href: "/",
            isExternal: false
        },
        {
            label: "Fixture",
            href: "/fixture",
            isExternal: false
        },
        {
            label: "Teams",
            href: "/teams",
            isExternal: false
        },
        {
            label: "Roadmap",
            href: "/roadmap",
            isExternal: false
        }
    ];

    return (
        <Navbar isBordered={true}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground">
                        <Button className="flex pr-2" size={"sm"} variant="light"  isIconOnly
                                aria-label="Like">
                            <Football theme={theme}/>
                        </Button>
                    <p className="font-bold text-xl text-inherit">Supercoach Live</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`} isActive={location.pathname === item.href} aria-current={location.pathname === item.href &&  'page'}>
                        <Link
                            color={
                                location.pathname === item.href ? "primary" : "foreground"
                            }
                            isExternal={item.isExternal}
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
                {/*<NavbarItem isActive>*/}
                {/*    <Link href="/" aria-current="page">*/}
                {/*        Home*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
                {/*<NavbarItem>*/}
                {/*    <Link href="/fixture" color="foreground" >*/}
                {/*        Fixture*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
            </NavbarContent>
            <NavbarContent justify="end">
                {/*<NavbarItem className="hidden lg:flex">*/}
                {/*    <Link href="#">Login</Link>*/}
                {/*</NavbarItem>*/}
                {/*<NavbarItem>*/}
                {/*    <Button as={Link} color="primary" href="#" variant="flat">*/}
                {/*        Sign Up*/}
                {/*    </Button>*/}
                {/*</NavbarItem>*/}
                    <NavbarItem>
                    <div className="flex gap-4 items-center">
                        <Button size={"sm"} variant="light" onClick={() => handleThemeChange()} isIconOnly
                                aria-label="Like">
                            <LightBulb theme={theme}/>
                        </Button>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`} isActive={location.pathname === item.href} aria-current={location.pathname === item.href &&  'page'}>
                        <Link
                            color={
                                location.pathname === item.href ? "primary" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            isExternal={item.isExternal}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}