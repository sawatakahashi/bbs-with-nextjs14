import { PrismaClient } from "@prisma/client/extension";
import BBSCardList from "./components/BBSCardList";
import prisma from "@/lib/prismaClient";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSData[] = await res.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
