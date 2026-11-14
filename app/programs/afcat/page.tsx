import type { Metadata } from "next";
import { ProgramDetailPage } from "@/components/program-detail-page";
import { programDetails } from "@/lib/site-data";

export const metadata: Metadata = { title: "AFCAT Coaching" };

export default function AFCATPage() {
  return <ProgramDetailPage program={programDetails.afcat} />;
}
