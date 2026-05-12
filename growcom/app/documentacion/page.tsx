import { redirect } from "next/navigation";
import DocumentacionForm from "./DocumentacionForm";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default async function DocumentacionPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const keyParam = typeof resolved.k === "string" ? resolved.k : "";
  const configuredKey = process.env.INTAKE_PRIVATE_KEY ?? "";

  // Private route: only accessible with the configured key.
  // If key is missing/invalid, send user back to home instead of showing 404.
  if (!configuredKey || keyParam !== configuredKey) {
    redirect("/");
  }

  return <DocumentacionForm accessKey={keyParam} />;
}
