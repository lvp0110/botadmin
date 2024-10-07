import { ToolChoice } from "./tool-choice";

export interface ApiConfig {
  max_tokens: number;
  temperature: number;
  tool_choice: ToolChoice;
}
