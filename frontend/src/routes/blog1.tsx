import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog1")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2 flex flex-col">
      <div className="lg:w-[800px] mx-auto">
        <div className="text-center text-2xl font-bold pb-10">First Blog</div>
        <p className="pb-5">
          Hello and welcome to my blog! This is a space that will become filled
          with{" "}
          <span className="text-cyan-300">
            computer science, programming and software development
          </span>{" "}
          topics and discussions. My first few blogs will discuss the{" "}
          <span className="text-cyan-300">fundamentals of computing</span>, and
          it will quickly turn into all the fun things happening in{" "}
          <span className="text-cyan-300">modern tech</span> like evolutions in
          AI and LLMs, React, TypeScript, JavaScript, Vercel, Next, Auth, Vim,
          game development, databases, functional programming, OOP, procedural
          programming, ThePrimeagen, Theo...
          <p className="py-5">
            I (and hopefully you as well) will be having{" "}
            <span className="text-cyan-300">L takes, W takes, hot takes</span>,
            crazy takes, I will be wrong, right, and lots and lots of fun
            discussions can take place.
          </p>
          <p>Sit back and enjoy the show, or join in the fray!</p>
        </p>
      </div>
    </div>
  );
}
