import type { Metadata } from "next";
import { ProgramDetailPage } from "@/components/program-detail-page";
import { programDetails } from "@/lib/site-data";

export const metadata: Metadata = { title: "NDA & NA Coaching" };

export default function NDAPage() {
  return <ProgramDetailPage program={programDetails.nda} />;
}
