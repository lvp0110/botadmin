export type AttributeCode = string;

export enum AttributeType {
  Lexis = "lexis",
  Styles = "style",
  Tones = "tone",
  Grammar = "grammar",
}

export const AttributeTypeNames: Record<AttributeType, string> = {
  [AttributeType.Lexis]: 'Лексика',
  [AttributeType.Styles]: 'Стиль общения',
  [AttributeType.Tones]: 'Тон общения',
  [AttributeType.Grammar]: 'Грамматика общения'
}

export interface Attribute {
  code: AttributeCode;
  name: string;
}


