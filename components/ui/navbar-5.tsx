"use client";

import { Menu } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const services = [
  { title: "Ship Agency", description: "Port calls, clearances, and local attendance", href: "#services" },
  { title: "Ship Recycling", description: "Alang delivery and recycling coordination", href: "#recycling" },
  { title: "Marine Spares", description: "New, reusable, and reconditioned machinery", href: "#services" },
  { title: "Ship Chandling", description: "Provisions, stores, and urgent supplies", href: "#services" },
  { title: "Cargo & Tank", description: "Cargo handling and tank service support", href: "#services" },
  { title: "Brokerage", description: "Cash buying and commercial coordination", href: "#services" },
];

const navigationLinks = [
  { label: "Ship Recycling", href: "#recycling" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export function Navbar5() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="#top" aria-label="R V Maritime home">
          <img src="/assets/logo-white-bg.png" alt="R V Maritime Private Limited logo" />
        </a>

        <NavigationMenu className="hidden justify-self-center lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[620px] grid-cols-2 gap-1 p-3">
                  {services.map((service) => (
                    <NavigationMenuLink
                      href={service.href}
                      key={service.title}
                      className="rounded-lg p-3 transition duration-200 hover:bg-soft focus:bg-soft focus:outline-none"
                    >
                      <span className="block font-bold text-ink">{service.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{service.description}</span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink href={link.href} className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <a href="#contact" className={cn(buttonVariants(), "hidden justify-self-end lg:inline-flex")}>Enquire Now</a>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="justify-self-end lg:hidden" variant="outline" size="icon" aria-label="Open navigation menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <a className="flex w-fit items-center gap-3" href="#top">
                  <img className="size-14 rounded-lg object-contain shadow-xs" src="/assets/logo-white-bg.png" alt="" />
                  <span>R V Maritime</span>
                </a>
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-6" aria-label="Mobile navigation">
              <Accordion type="single" collapsible>
                <AccordionItem value="services">
                  <AccordionTrigger>Services</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {services.map((service) => (
                        <SheetClose asChild key={service.title}>
                          <a className="rounded-lg p-3 transition hover:bg-soft" href={service.href}>
                            <span className="block font-bold text-ink">{service.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted">{service.description}</span>
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col py-2">
                {navigationLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a className="flex min-h-12 items-center border-b border-line font-semibold text-ink" href={link.href}>
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>

              <SheetClose asChild>
                <a href="#contact" className={cn(buttonVariants(), "mt-5 w-full")}>Enquire Now</a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
