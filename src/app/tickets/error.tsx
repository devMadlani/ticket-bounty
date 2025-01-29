"use client";

import React from "react";
import Placeholder from "@/components/Placeholder";

export default function Error({ error }: { error: Error }) {
  return <Placeholder label={error.message} />;
}
