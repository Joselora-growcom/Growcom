/** Abre el formulario de contacto (ContactModal) en cualquier pagina. */
export function openContactForm() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("open-contact-modal"));
}
