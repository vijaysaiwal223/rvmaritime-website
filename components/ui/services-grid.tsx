import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Droplets,
  Handshake,
  Package,
  Recycle,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Ship Agency",
    description:
      "Port agency attendance, authority liaison, inward and outward clearance, crew movement, documentation, and on-ground coordination for vessel calls.",
    icon: Anchor,
  },
  {
    title: "Ship Recycling Support",
    description:
      "Assistance for vessels arriving for recycling, including Alang delivery coordination, beaching support, local formalities, and recycler liaison.",
    icon: Recycle,
  },
  {
    title: "Marine Spares",
    description:
      "Supply of new, reusable, reconditioned, and second-hand ship machinery spares sourced through reliable marine and recycling-yard networks.",
    icon: Wrench,
  },
  {
    title: "Ship Chandling",
    description:
      "Provisions, bonded stores, deck stores, engine stores, cabin stores, safety items, and urgent vessel requirements arranged through a responsive supply desk.",
    icon: Package,
  },
  {
    title: "Cargo & Tank Services",
    description:
      "Cargo handling, tank cleaning coordination, slop and sludge disposal support, and operation planning aligned with port and environmental requirements.",
    icon: Droplets,
  },
  {
    title: "Cash Buying & Brokerage",
    description:
      "Commercial support for end-of-life vessels and maritime assets, including inspection coordination, buyer-seller liaison, and recycling market follow-up.",
    icon: Handshake,
  },
];

export function ServicesGrid() {
  return (
    <div className="mx-auto grid w-full max-w-content gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, description, icon: Icon }) => (
        <Card
          key={title}
          className="group min-h-64 p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lg"
        >
          <CardContent>
            <div className="flex size-11 items-center justify-center rounded-lg border border-red/20 bg-red/10 text-red-dark">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </div>
            <CardHeader className="mt-6">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
