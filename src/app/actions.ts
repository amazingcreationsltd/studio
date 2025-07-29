"use server";

import { generateDailyQuote } from "@/ai/flows/generate-quote";

export async function getQuote() {
  try {
    // We can enhance the topic to be more specific if needed
    const result = await generateDailyQuote({ topic: "the intersection of technology and creativity" });
    if (result.quote && result.isAligned) {
      return { quote: result.quote };
    }
    // Fallback if the quote is not aligned or empty
    return { quote: "Design is not just what it looks like and feels like. Design is how it works." };

  } catch (error) {
    console.error("Error fetching daily quote:", error);
    // Return a graceful fallback quote on error
    return { quote: "The future is not something we enter. The future is something we create." };
  }
}
