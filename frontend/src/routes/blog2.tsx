import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2 flex flex-col">
      <div className="lg:w-[800px] mx-auto">
        <div className="text-center text-2xl font-bold pb-10">
          Computer Architecture
        </div>
        <p className="pb-5">
          In my opinion, there are two schools of thought when it comes to the
          approach of teaching and educating students in the topics of computer
          science and software development. The first is top-down, where you
          begin by teaching development-friendly languages like Python and get
          them to write code and programs. The second is bottom-up, where you
          start by teaching computer architecture and concepts and naturally
          transition to problem-oriented programming languages.
        </p>
        <p className="pb-5">
          I am usually in the prior camp: when I teach my students, I want them
          to begin writing Python scripts and executing their programs even if
          they don't understand what is happening "under the hood". This is
          because this approach is much more interactive and it gives the
          student something to do and observe.
        </p>
        <p className="pb-5">
          However, today I will be doing the opposite because 1. this is a blog,
          and 2. I am curious to see how the opposing camp feels.
        </p>
        <p className="pb-5">In having said so, let's begin.</p>
        <p className="pb-5 font-bold text-xl">Computer Architecture</p>
        <p className="pb-5">
          Usually, this topic is taught at around year 3 of a 4 year bachelor of
          science degree in computer science in most universities. Having said
          that, it is actually not that daunting to learn.
        </p>
        <p className="pb-5">
          There are a total of six levels of computer architecture. These are:
        </p>
        <p className="font-bold">Level 5: problem-oriented level</p>
        <p className="pb-5">
          This level is where virtually all general-purpose programming
          languages reside. You might have heard of JavaScript, Java (NOT the
          same as JavaScript), Python, PHP, Gleam, Typescript, C#... these are
          all level 5 languages. In fact, a lot of programmers believe C is a
          "lower-level" language, but in fact, it still shares the same level as
          all the others in the sense of computer architecture, even if
          pointers, bit and memory manipulation is possible.
        </p>
        <p className="pb-5">
          So what's below these "application" level languages?
        </p>
        <p className="font-bold">Level 4: Assembly level</p>
        <p className="pb-5">
          Assembly language (ASM) has the capacity to manipulate CPU registers
          and main memory (RAM) and therefore is one level below the others. In
          fact, assembly language depends on the hardware architecture and
          therefore will look different in various systems (ARM, x86, x86_64,
          etc.). C programs are often compiled into assembly language before
          being further compiled into object files and executable files (machine
          code).
        </p>
        <p className="font-bold">Level 3: Operating system level</p>
        <p className="pb-5">
          This is where compilers, assemblers, and runtime libraries live. The
          operating system acts as a resource manager and abstracts the hardware
          by managing processes, memory, file systems, I/O devices and system
          calls.
        </p>
        <p className="font-bold">Level 2: Instruction set architecture level</p>
        <p className="pb-5">
          Official boundary between software and hardware. Focuses on the
          processor and operation types such as ADD, SUB, MUL, DIV, AND, OR,
          JUMP, LOAD and STORE. Here, we also learn about data types in the
          processor level, such as integers, floating points, characters and
          SIMD vectors. Number of registers available to the processor and RISC
          and CISC architectures come in play here.
        </p>
        <p className="font-bold">Level 1: Microarchitecture level</p>
        <p className="pb-5">
          One level from the bottom. This level concerns with the datapath, CPU
          busses, data busses, how memory addresses travel from main memory into
          registers, how instructions travel from RAM through the decoder and
          into the ALU, how the CPU executes READ, WRITE and operations like ADD
          and CARRY IN.
        </p>
        <p className="font-bold">Level 0: Digital logic level</p>
        <p className="pb-5">
          The lowest of all levels. Here, we're dealing with circuits and logic
          gates (AND, OR, NOT, NAND, NOR). This is the level where you learn how
          registers and the ALU work. This is the level where you learn what a
          clocked D-latch is, what a flip-flop is.
        </p>
        <p className="pb-5">
          If all this didn't make a whole lot of sense yet, don't worry about
          it! We'll dive deeper into each. Since we're using the bottom-up
          approach, we're going to start from level 0 upward. Since we don't
          want this blog post to become as long as a 600 page textbook, we'll
          only touch on levels 0 and 1 here so you get a better understanding of
          the fundamentals of computer science.
        </p>
        <p className="font-bold text-xl">Level 0: The Beginning</p>
        <p className="pb-5">
          Your computer is made up of essentially four parts: a motherboard,
          CPU, RAM, and hard drive. The motherboard is just a board made up of
          fiberglass epoxy resin with copper wires etched into it. It's usually
          green because of a green coating made of polymer resin called a solder
          mask. It is the part that will house all the other components and
          connect them to each other (hence why it's called a motherboard).
        </p>
        <p className="pb-5">
          The RAM (random access memory) or main memory, is made up of cells
          that store all sorts of data in the form of bits (binary digits),
          essentially voltage that is either lower than a certain threshold, say
          4 volts, which indicates a bit value of 0, or higher than the
          threshold indicating 1 is passed into a logic gate made up of
          transistors (transistors are just tiny switches) and is stored in a
          clock signal edge. But when you turn off your computer, all the data
          inside the RAM will be gone, and therefore data living in main memory
          is not persistent and will often be replaced as your computer programs
          execute various instructions.
        </p>
        <p className="pb-5">
          The hard drive is where persistent data lives. There are essentially
          two types of hard drives: hard disk drives and solid state drives.
          Hard disk uses a cylinder made up of thousands of magnetic disc plates
          and reader arms that read each plate to retrieve data embedded
          magnetically in each plate. Plates are spun mechanically to be read.
          Solid state drives store data in microchips as electrical charges in
          floating gate transistors and are retrieved simply by sending
          electrical signals.
        </p>
        <p className="pb-5">
          What we're going to focus on is the last part: the CPU (central
          processing unit). The CPU is made up of registers (very small data
          storage component), busses that pass data from one component to
          another, the instruction decoder, and the ALU (arithmetic logic unit).
          A 64-bit system's registers are 64 bits in size each.
        </p>
        <p className="pb-5">
          I lied. There's actually a fifth component known as the cache which
          can have multiple levels for fast data retrieval used by the CPU, but
          we will get to this later.
        </p>
        <p className="font-bold text-xl">Logic Gates</p>
        <p className="pb-5">
          Let's say you pass voltage high enough to be registered as 1 bit
          through a copper wire. What will come out the other end of the wire?
        </p>
        <p className="pb-5">
          The laws of physics (not quantum physics!) dictates that the output
          will be the same as the input. 1 bit.
        </p>
        <p className="pb-5">
          Now let's say I place a gate made up of transistors in the middle of
          the wire. This gate's role is to negate whatever goes into it. Now
          what will be the output?
        </p>
        <p className="pb-5">
          This type of logic gate is called a NOT or negation gate. Now let's
          say I pass in the same high voltage in TWO wires this time. What is
          the output of both wires with no gates? Both 1. What happens if I
          connect the two wires so that there is only one output? The output
          will be... 1 since the voltage is still higher than the threshold.
        </p>
        <p className="pb-5">
          Now what happens if I pass a 1 in one wire but 0 in the other, and I
          connect both into an AND gate with only one wire coming out the other
          end? The result will be 0 because one of them is a 0. The AND gate
          only passes 1 if ALL inputs are 1.
        </p>
        <p className="pb-5">
          An OR gate, however, will output 1 as long as there is one input that
          has the value of 1. You can also create NAND and NOR gates by
          combining a negation gate with an AND or OR gate. Essentially, these
          will output the OPPOSITE of what should normally come out of an AND or
          OR gate, since the output is being negated.
        </p>
        <p className="pb-5">
          Now, why are we talking about these voltages, wires, transistors and
          gates? Because registers and the ALU in the CPU are made up of these.
          Registers are made up of circuits made up of logic gates called a
          flip-flop. Each bit in a register is made up of one flip-flop,
          therefore a 64-bit register is made up of 64 flip-flop circuits. All
          of these flip-flops can only change value during a very specific
          split-instance (picoseconds) controlled by a component called a clock
          combined by a circuit structure called a pulse generator. The pulse
          generator is what makes the window for bit value change picoseconds. A
          clock cycle is about 50 nanoseconds, give or take.
        </p>
        <p className="pb-5">
          Similarly, the ALU is made up of logic gates that determine whether it
          is in READ mode or WRITE mode, and depending on the mode, some
          circuits are closed while others are open. For example, if the ALU's
          READ mode is 1, the output will be set to N/A. Everything in the ALU
          is made up of pure logic gates that take in 1s or 0s.
        </p>
        <p>
          And why is this important? Because the entire world of computer
          science and software development revolve around this (except quantum
          computing). It alludes to Shakespeare's "to be, or not to be", or to
          exist or not to exist. Something is, or something is not. Something is
          (1) or something is not(0). Something is (true state), something is
          not (false state). User is logged in? Show dashboard. User is not
          logged in? Show home page. Player won? Add +1 to score and show happy
          face. Player lost? Show sad face. And this, ladies and gentlemen, is
          called boolean logic.
        </p>
      </div>
    </div>
  );
}
