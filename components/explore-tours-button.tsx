"use client";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export default function ExploreToursButton() {
  const handleClick = useCallback(() => {
    const el = document.getElementById("tours-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Button
      size="lg"
      className="text-base rounded-full px-8"
      onClick={handleClick}
    >
      Explore Tours
    </Button>
  );
}
