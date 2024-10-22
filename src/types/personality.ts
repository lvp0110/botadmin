import { PropType, PropItem } from "./props";

export type PersonalityCode = string;

export interface PersonalityFormData {
  name: string;
  lexis?: string;
  styles?: string;
  tones?: string;
  grammar?: string;
}

export interface PersonalityItem {
  type: PropType;
  data: PropItem;
}

export interface Personality {
  name: string;
  code: PersonalityCode;
  prop_list: PersonalityItem[];
}

export interface PersonalityPreviewResponse {
  data: {
    name: string
    items: PersonalityPreview[]
  }
}

export interface PersonalityPreview {
  name: string;
  code: PersonalityCode;
}

/*

type PersonalityRequest struct {
 Name        string json:"name" binding:"required"
 Code        string json:"code" binding:"required"
 LexisCode   string json:"lexis_code" binding:"required"
 StyleCode   string json:"styles_code" binding:"required"
 ToneCode    string json:"tones_code" binding:"required"
 GrammarCode string json:"grammar_code" binding:"required"
}
*/
