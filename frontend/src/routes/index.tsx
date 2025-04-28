import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-10 text-cyan-400 text-2xl">Hello "/"!</div>;
}
