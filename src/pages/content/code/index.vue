<template>
  <div class="col">
      <h4 :data-text= "route.params.code ">{{ route.params.code }}</h4>
    <hr/>
    <hr/>
    <h5> Характер:</h5>
   <hr>
  </div>

  <div class="content">
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">Лексика</label>
      <select class="form-select" id="inputGroupSelect01" v-model="lexical">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect02"
        >Стиль общения</label
      >
      <select class="form-select" id="inputGroupSelect02" v-model="style">
        <option selected>Choose...</option>
        <option value="4">One</option>
        <option value="5">Two</option>
        <option value="6">Three</option>
      </select>
    </div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect03"
        >Тон общения</label
      >
      <select class="form-select" id="inputGroupSelect03" v-model="tone">
        <option selected>Choose...</option>
        <option value="name">One</option>
        <option value="8">Two</option>
        <option value="9">Three</option>
      </select>
    </div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect04"
        >Грамматика общения</label
      >
      <select class="form-select" id="inputGroupSelect04" v-model="grammar">
        <option selected>Choose...</option>
        <option value="9">One</option>
        <option value="10">Two</option>
        <option value="11">Three</option>
      </select>
    </div>
    <div
      id="contentBotBlock"
      class="content-bot-block"
      style="display: none"
    ></div>
    
    <div class="col">
      <h5>Загруженная информация:</h5>
      <hr>
      <!-- <h4>{{ route.params.code }}</h4> -->
    </div>
    <div class="dropdown">
      <span @click="toggleDropdown">Подключение контента</span>
      <ul v-if="showDropdown" style="list-style-type: none;">
        <li>
          <label for="opt1">content 1</label>
          <input type="checkbox" id="opt1" v-model="selectedOptionsMap['content 1']"/>
        </li>
        <li>
          <label for="opt2">content 2</label>
          <input type="checkbox" id="opt2" v-model="selectedOptionsMap['content 2']"/>
        </li>
        <li>
          <label for="opt3">content 3</label>
          <input type="checkbox" id="opt3" v-model="selectedOptionsMap['content 3']"/>
        </li>
        <li>
          <label for="opt4">content 4</label>
          <input type="checkbox" id="opt4" v-model="selectedOptionsMap['content 4']"/>
        </li>
        <li>
          <label for="opt5">content 5</label>
          <input type="checkbox" id="opt5" v-model="selectedOptionsMap['content 5']"/>
        </li>
      </ul>
    </div>
    <hr/>
    <div style="display: flex">
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect04"
        >Просмотр/ <br> редактирование</label
      >
        <select
        class="form-select"
        id="optionsList"
        aria-label="Default select example"
        v-model="selectedContent"
      >
        <option selected disabled>Просмотр/редактирование контента</option>
        <option v-for="option in dropdownOptions" :key="option" :value="option">{{ option }}</option>
  
      </select>
      </div>
    </div>

    <div class="input-group field">
      <span class="input-group-text">{{ selectedContent }}</span>
      <textarea class="form-control" aria-label="With textarea">
      {{ selectedContent }}  
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut excepturi impedit libero rerum sed, cum animi voluptates. Illo recusandae similique veniam at tempore officiis corrupti minus vel non, delectus quas!
      </textarea>
      <!-- <button class="btn btn-secondary">save</button> -->
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed, watchEffect } from "vue";
import { AssistantFullInfo } from "../../../types/assistant-full-info";
import { ToolChoice } from "../../../types/tool-choice";
import { Prompt } from "../../../types/prompt";

const prompt: Prompt = {
  category: "category",
  message: "message",
  name: "name",
};

const assistant: AssistantFullInfo = {
  assistant: {
    code: "",
    description: "",
    is_active: false,
    name: "",
  },
  config_api: {
    max_tokens: 0,
    temperature: 0,
    tool_choice: ToolChoice.Auto,
  },
  content: [prompt],
  personality: {
    name: "test name",
    grammar: prompt,
    lexis: prompt,
    styles: prompt,
    tones: prompt,
  },
  tool: [],
};

const route = useRoute();
const lexical = ref(assistant.personality.lexis.name);
const style = ref(assistant.personality.styles.name);
const tone = ref(assistant.personality.tones.name);
const grammar = ref(assistant.personality.grammar.name);

const selectedContent = ref("Контент");

const showDropdown = ref(false);

const selectedOptions = ref<string[]>([]);

const selectedOptionsMap = ref<Record<string, boolean>> ({
  'content 1': false,
  'content 2': false,
  'content 3': false,
  'content 4': false,
  'content 5': false,
});
watchEffect(() => {
  selectedOptions.value = Object.keys(selectedOptionsMap.value).filter(key => selectedOptionsMap.value[key]);
});

const dropdownOptions = computed(() => {
  return selectedOptions.value;
});

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
h4 {
  margin: -25px 45%;
  position: absolute;
  color: #ccc;
}
h4::before {
  content: attr(data-text);
  color: rgb(35, 84, 141);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  /* border-right: solid 2px gainsboro; */
  width: 0;
  height: 100%;
  animation: print 15s linear infinite;
}
@keyframes print {
  0%, 10%, 100% {
    width: 0;
  }
  70%, 90% {
    width: 100%;
  }
}
.modal.fade {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.modal.fade.show {
  opacity: 1;
}

.col {
  text-align: center;
  padding: 8px;
}
label {
  width: 190px;
}
.content {
  width: 90%;
  margin-left: 5%;
}
.field {
  margin-top: 5px;
}

.dropdown {
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
  z-index: 2;
  width: 100%;
}

.dropdown li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #ccc;
  margin-bottom: 2px;
  padding: 4px;
  border-radius: 3px;
}

.dropdown input[type="checkbox"] {
  margin-left: auto;
}

.dropdown > span {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
  margin-left: 2px;
}

.dropdown ul {
  position: absolute;
  background: white;
  list-style-type: none;
  padding: 0;
  margin-top: 5px;
  width: 100%;
  z-index: 0;
}

.dropdown input[type="checkbox"] {
  margin-right: 5px;
}
</style>
