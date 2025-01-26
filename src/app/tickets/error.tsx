"use client";

import Placeholder from "@/components/Placeholder";
import React from "react";

export default function Error({ error }: { error: Error }) {
  return <Placeholder label={error.message} />;
}
