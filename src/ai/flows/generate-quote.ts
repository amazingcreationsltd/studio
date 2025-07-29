// src/ai/flows/generate-quote.ts
'use server';

/**
 * @fileOverview Generates a daily AI quote related to technology, design, or personal growth.
 *
 * - generateDailyQuote - A function that generates the daily quote.
 * - GenerateDailyQuoteInput - The input type for the generateDailyQuote function.
 * - GenerateDailyQuoteOutput - The return type for the generateDailyQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDailyQuoteInputSchema = z.object({
  topic: z.string().default('technology, design, or personal growth').describe('The topic for the quote.'),
});
export type GenerateDailyQuoteInput = z.infer<typeof GenerateDailyQuoteInputSchema>;

const GenerateDailyQuoteOutputSchema = z.object({
  quote: z.string().describe('The generated quote.'),
  isAligned: z.boolean().describe('Whether the generated quote aligns with the website theme.'),
});
export type GenerateDailyQuoteOutput = z.infer<typeof GenerateDailyQuoteOutputSchema>;

export async function generateDailyQuote(input: GenerateDailyQuoteInput): Promise<GenerateDailyQuoteOutput> {
  return generateDailyQuoteFlow(input);
}

const quotePrompt = ai.definePrompt({
  name: 'quotePrompt',
  input: {schema: GenerateDailyQuoteInputSchema},
  output: {schema: GenerateDailyQuoteOutputSchema},
  prompt: `You are an AI quote generator. Generate a quote related to {{{topic}}}. Then, determine if the quote aligns with the theme of a personal portfolio website, and set the isAligned field accordingly. The website showcases skills in UI/UX design, graphic design, photography, videography, storytelling, and software development. Here is the quote:\n\nQuote: {{quote}}`,
});

const generateDailyQuoteFlow = ai.defineFlow(
  {
    name: 'generateDailyQuoteFlow',
    inputSchema: GenerateDailyQuoteInputSchema,
    outputSchema: GenerateDailyQuoteOutputSchema,
  },
  async input => {
    const {
      output
    } = await ai.generate({
      model: 'googleai/gemini-2.0-flash',
      prompt: `Generate a quote related to ${input.topic}.`,
      config: {
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_LOW_AND_ABOVE',
          },
        ]
      }
    });

    const quote = output?.text ?? '';

    const alignmentCheckResult = await quotePrompt({
      ...input,
      quote: quote,
    });

    return {
      quote: quote,
      isAligned: alignmentCheckResult.isAligned,
    };
  }
);
