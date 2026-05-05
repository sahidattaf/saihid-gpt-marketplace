import { NextRequest, NextResponse } from "next/server";
import { filterGpts, Category } from "@/lib/gptData";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const category = searchParams.get("category") as Category | null;
  const q = searchParams.get("q") ?? undefined;
  const featured = searchParams.get("featured") as
    | "Yes"
    | "No"
    | "Coming Soon"
    | null;
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const results = filterGpts({
    category: category ?? undefined,
    search: q,
    featured: featured ?? undefined,
    priceMin: priceMin ? parseFloat(priceMin) : undefined,
    priceMax: priceMax ? parseFloat(priceMax) : undefined,
  });

  return NextResponse.json({
    total: results.length,
    data: results,
  });
}
