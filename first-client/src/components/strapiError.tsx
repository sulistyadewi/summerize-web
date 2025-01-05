import React from "react";

interface strapiErrorProps {
  message: string | null;
  name: string | null;
  status: number | null;
}

export function StrapiError({ error }: { error: strapiErrorProps }) {
  if (!error?.message) return null;

  return <div>{error.message}</div>;
}

// export default StrapiError;
