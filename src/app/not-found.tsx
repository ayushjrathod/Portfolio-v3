import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-medium text-slate-100">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        This URL does not exist. Head back to the portfolio.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm text-accent underline-offset-4 hover:underline"
      >
        Return home
      </Link>
    </main>
  );
}
