'use server';

/**
 * @fileOverview This file defines a Genkit flow for enhancing project descriptions using AI.
 *
 * The flow takes a project description as input and returns an enhanced version
 * designed to be more engaging and effective at highlighting key aspects.
 *
 * @exports enhanceProjectDescription - The main function to enhance the project description.
 * @exports EnhanceProjectDescriptionInput - The input type for the enhanceProjectDescription function.
 * @exports EnhanceProjectDescriptionOutput - The output type for the enhanceProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The original project description to be enhanced.'),
});
export type EnhanceProjectDescriptionInput = z.infer<
  typeof EnhanceProjectDescriptionInputSchema
>;

const EnhanceProjectDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe('The enhanced project description, designed to be more engaging.'),
});
export type EnhanceProjectDescriptionOutput = z.infer<
  typeof EnhanceProjectDescriptionOutputSchema
>;

export async function enhanceProjectDescription(
  input: EnhanceProjectDescriptionInput
): Promise<EnhanceProjectDescriptionOutput> {
  return enhanceProjectDescriptionFlow(input);
}

const enhanceProjectDescriptionPrompt = ai.definePrompt({
  name: 'enhanceProjectDescriptionPrompt',
  input: {schema: EnhanceProjectDescriptionInputSchema},
  output: {schema: EnhanceProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating engaging project descriptions for portfolios.

  Please enhance the following project description to make it more captivating and effectively highlight the key aspects of the project.

  Original Description: {{{projectDescription}}}

  Enhanced Description:`, // Ensure the output focuses solely on the enhanced description.
});

const enhanceProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDescriptionFlow',
    inputSchema: EnhanceProjectDescriptionInputSchema,
    outputSchema: EnhanceProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await enhanceProjectDescriptionPrompt(input);
    return output!;
  }
);
