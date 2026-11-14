import type { Metadata } from "next";
import { ProgramDetailPage } from "@/components/program-detail-page";
import { programDetails } from "@/lib/site-data";

export const metadata: Metadata = { title: "SSB Interview Preparation" };

export default function SSBPage() {
  return <ProgramDetailPage program={programDetails.ssb} />;
}
