import type { Metadata } from "next";
import { ProgramDetailPage } from "@/components/program-detail-page";
import { programDetails } from "@/lib/site-data";

export const metadata: Metadata = { title: "CDS Coaching" };

export default function CDSPage() {
  return <ProgramDetailPage program={programDetails.cds} />;
}
