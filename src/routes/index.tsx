import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hi" },
      { name: "description", content: "A friendly hello." },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-7xl font-bold tracking-tight text-foreground md:text-9xl">
        hi
      </h1>
    </main>
  );
}
