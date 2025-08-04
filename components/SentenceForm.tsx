"use client";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function SentenceForm() {
  return (
    <section className="flex flex-col  items-center justify-between px-4 py-8 sm:px-8 sm:py-24">
   
    <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Welcome to NL Explainer</h1>
      <p className="text-base sm:text-lg mb-4 text-center">
        Paste below your text and get a detailed explanation.
      </p>
      <Textarea
        className="w-full max-w-md min-h-[120px] mb-6"
        placeholder="Type or paste your text here..."
      />
      <div className="mt-4 w-full max-w-md flex justify-center">
        <Button
          className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => alert("Explanation generated!")}
        >
          Generate Explanation
        </Button>
      </div>
    </section>
  );
}
