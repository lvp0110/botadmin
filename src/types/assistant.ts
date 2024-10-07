export type AssistantCode = string;

export interface Assistant {
  code: AssistantCode;
  name: string;
  description: string;
  is_active: boolean;
}
