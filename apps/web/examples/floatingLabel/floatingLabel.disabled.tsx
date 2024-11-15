import { FloatingLabel } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { FloatingLabel } from "flowbite-react";

export function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

const codeRSC = `
import { FloatingLabel } from "flowbite-react";

export function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}

export const disabled: CodeData = {
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
  githubSlug: "floatingLabel/floatingLabel.disabled.tsx",
  component: <Component />,
};
