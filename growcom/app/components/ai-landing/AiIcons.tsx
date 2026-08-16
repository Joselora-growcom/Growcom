export function IconCommercial({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 18V6m0 12h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8 14v-4m4 4V8m4 6v-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconSupport({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 9a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V9Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M12 17v3m-3 0h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconOps({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M19.4 15a8.2 8.2 0 0 0 .1-1l2-1.2-2-3.4-2.3.6a8.2 8.2 0 0 0-1.7-1L15.2 6h-6.4l-.3 2.6c-.6.3-1.1.6-1.7 1l-2.3-.6-2 3.4 2 1.2a8.2 8.2 0 0 0 0 2l-2 1.2 2 3.4 2.3-.6c.5.4 1.1.8 1.7 1l.3 2.6h6.4l.3-2.6c.6-.3 1.2-.6 1.7-1l2.3.6 2-3.4-2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStrategic({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
