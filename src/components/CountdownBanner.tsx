import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const TOTAL_SECONDS = 7 * 60 * 60; // 7 hours

const CountdownBanner = () => {
  const [remaining, setRemaining] = useState(() => {
    const stored = localStorage.getItem("countdown_start");
    if (stored) {
      const elapsed = Math.floor((Date.now() - Number(stored)) / 1000) % TOTAL_SECONDS;
      return TOTAL_SECONDS - elapsed;
    }
    localStorage.setItem("countdown_start", String(Date.now()));
    return TOTAL_SECONDS;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          localStorage.setItem("countdown_start", String(Date.now()));
          return TOTAL_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full bg-destructive text-destructive-foreground py-3 px-4 text-center z-50 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm md:text-base font-medium">
        <span>
          🔥 This promotion expires in{" "}
          <span className="font-bold font-heading">
            0 days {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
          </span>
        </span>
        <CTAButton
          className="!py-2 !px-5 !text-sm !rounded-md !animate-none"
          label="Buy Now"
        />
      </div>
    </div>
  );
};

export default CountdownBanner;
