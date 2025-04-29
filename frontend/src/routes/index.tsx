import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <div className="text-center text-2xl font-bold pb-10">Posts</div>
      <div className="flex flex-col">
        <div className="mx-auto">
          <Link to="/blog2" className="flex py-1">
            <div className="pr-10 text-cyan-300">2025-04-28</div>
            <div className="font-bold">Computer Architecture</div>
          </Link>
          <Link to="/blog1" className="flex py-1">
            <div className="pr-10 text-cyan-300">2025-04-28</div>
            <div className="font-bold">First Blog</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
