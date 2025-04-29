import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2 flex flex-col">
      <div className="lg:w-[800px] mx-auto">
        <div className="text-center text-2xl font-bold pb-10">About</div>
        <p className="pb-5">
          Hello! My name is Paul Kim and I made this blog in the hopes of
          achieving the following:
        </p>
        <p className="font-bold text-cyan-300">1. Informative</p>
        <p className="pb-5">
          My blogs will be hopefully informative in the computer science and
          software development space. It will teach you things you didn't know,
          whether you are a beginner coder, a computer science student, or an
          advanced software developer.
        </p>
        <p className="font-bold text-cyan-300">2. Educational</p>
        <p className="pb-5">
          I will attempt to make my content as beginner-friendly as possible, to
          the extent that someone who doesn't know the first thing about
          software development will understand the content. The caveat: if you
          are a beginner, you probably want to read one of my very first posts,
          because I will begin with the very foundations of computer science.
        </p>
        <p className="font-bold text-cyan-300">3. Discussion-oriented</p>
        <p className="pb-5">
          My goal is to be able to communicate with my readers. I want to have
          enticing arguments and discussions about tech, the oldest and latest
          development topics. I want to see upvotes and downvotes from my
          readers about my posts. I want to see W takes and L takes from not
          only me as OP, but my commenters.
        </p>
        <p>Hopefully this app will make the world a better place. Enjoy!</p>
      </div>
    </div>
  );
}
