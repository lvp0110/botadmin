import { Prompt } from "./prompt";

export interface Personality {
  name: string;
  lexis: Prompt;
  styles: Prompt;
  tones: Prompt;
  grammar: Prompt;
}
