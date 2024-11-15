import { Progress } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Progress } from "flowbite-react";

export function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}
`;

const codeRSC = `
import { Progress } from "flowbite-react";

export function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}
`;

export function Component() {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
}

export const positioning: CodeData = {
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
  githubSlug: "progress/progress.positioning.tsx",
  component: <Component />,
};
