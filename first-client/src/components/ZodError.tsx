import React from "react";

function ZodError({ error }: { error: string[] }) {
  if (!error) return null;

  return error.map((err: string, index: number) => {
    <div key={index} className="text-lg">
      {err}
    </div>;
  });
}

export default ZodError;
