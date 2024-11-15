import { Spinner } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Spinner } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      <div className="text-right">
        <Spinner aria-label="Right-aligned spinner example" />
      </div>
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      <div className="text-right">
        <Spinner aria-label="Right-aligned spinner example" />
      </div>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      <div className="text-right">
        <Spinner aria-label="Right-aligned spinner example" />
      </div>
    </div>
  );
}

export const alignment: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "spinner/spinner.alignment.tsx",
  component: <Component />,
};
