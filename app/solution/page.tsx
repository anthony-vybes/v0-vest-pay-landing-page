import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SolutionHero } from "@/components/solution/solution-hero";

export const metadata: Metadata = {
  title: "How VestPay Works - Platform Payments Made Simple",
  description:
    "Learn how VestPay simplifies marketplace payments with escrow, automated splits, and instant disbursements. Built for platforms that need to move money between multiple parties.",
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionHero />
      <Footer />
    </main>
  );
}
