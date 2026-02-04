export function Footer() {
  return (
    <footer id="contact" className="bg-muted/50 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <a
          href="mailto:BackroomPrintsOKC@gmail.com"
          className="inline-block text-2xl font-bold text-foreground transition-colors hover:text-accent md:text-3xl"
        >
          BackroomPrintsOKC@gmail.com
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Affiliated with Backroom Productions OKC
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Backroom Prints. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
