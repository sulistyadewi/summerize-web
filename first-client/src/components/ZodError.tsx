import React from "react";

export function ZodErrors({ error }: { error: string[] }) {
  if (!error) return "";

  return error.map((err: string, index: number) => {
    <div key={index} className="text-lg">
      {err}
    </div>;
  });
}

// export default ZodErrors;
