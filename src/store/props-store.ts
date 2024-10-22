import { createStore } from "vuex";
import { PropType } from "../types/props";

export const propsStore = createStore({
  state() {
    return {
      props: [],
      dictionaryProps: {}
    };
  },
  actions: {
    async getProp(_, propType: PropType) {
      const response = await fetch(
        `http://localhost:3007/admin/personality/${propType}`
      );
    
      const json = await response.json();
    
       dictionaryProps[propType] = json.data
    },
  },
});
