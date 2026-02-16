import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const usePageView = (page = "/") => {
  useEffect(() => {
    supabase.from("page_views").insert({
      page,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    });
  }, [page]);
};
