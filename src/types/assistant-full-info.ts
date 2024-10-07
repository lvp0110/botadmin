import { ApiConfig } from "./api-config";
import { Assistant } from "./assistant";
import { Personality } from "./personality";
import { Prompt } from "./prompt";
import { Tool } from "./tool";

export interface AssistantFullInfo {
  assistant: Assistant;
  personality: Personality;
  content: Prompt[];
  tool: Tool[];
  config_api: ApiConfig;
}
