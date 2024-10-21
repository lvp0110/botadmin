export type PropType = string;

export interface Prop {
  type: PropType;
  name: string;
}

export interface PropItem {
  name: string;
  code: string;
  prompt: string;
}

export interface PropsResponse {
  props: Prop[];
}

export interface PropItemsResponse {
  prop: Prop;
  items: PropItem[];
}
