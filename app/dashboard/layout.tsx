import type { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: `%s | ${siteConfig.brokerName} Admin`,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
