import DocumentacionForm from "../documentacion/DocumentacionForm";

export default function DocumentacionConGrowcomPage() {
  return <DocumentacionForm accessKey={process.env.INTAKE_PRIVATE_KEY ?? ""} />;
}
