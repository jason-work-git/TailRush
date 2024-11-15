import { Alert } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Alert } from "flowbite-react";

export function Component() {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

const codeRSC = `
import { Alert } from "flowbite-react";

export function Component() {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  );
}
`;

export function Component() {
  return (
    <Alert color="warning" withBorderAccent>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export const borderAccent: CodeData = {
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
  githubSlug: "alert/alert.borderAccent.tsx",
  component: <Component />,
};
