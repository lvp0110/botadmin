<template>
  <div class="content">
    <div class="col">
      <h4 :data-text="assistant?.name">
        {{ assistant?.name }}
      </h4>
      <!-- <hr />
      <h5 class="subtitle">Характер</h5>
      <hr /> -->
    </div>

    <div class="modal"></div>
    <button type="button" class="btn btn-primary open" @click="openModal">
      Характер
    </button>
    <div v-if="isModalOpen" class="custom-modal">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">{{ route.params.code }}</h3>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- <div class="dropdown">
              <ul style="margin-top: 50px">
                <li>
                  <label for="opt1">Опция 1</label
                  ><input type="checkbox" id="opt1" />
                </li>
                <li>
                  <label for="opt2">Опция 2</label
                  ><input type="checkbox" id="opt2" />
                </li>
                <li>
                  <label for="opt3">Опция 3</label
                  ><input type="checkbox" id="opt3" />
                </li>
              </ul>
            </div> -->
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01"
                >Лексика</label
              >
              <select
                class="form-select"
                id="inputGroupSelect01"
                v-model="lexical"
              >
                <option selected>Choose...</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="">Three</option>
                <option value="because">because</option>
              </select>
            </div>

            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect02"
                >Стиль общения</label
              >
              <select
                class="form-select"
                id="inputGroupSelect02"
                v-model="communication"
              >
                <option selected>Choose...</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="Интилегент">Интеллигент</option>
              </select>
            </div>

            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect03"
                >Тон общения</label
              >
              <select
                class="form-select"
                id="inputGroupSelect03"
                v-model="tone"
              >
                <option selected>Choose...</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="Добрый">Добрый</option>
              </select>
            </div>

            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect04"
                >Грамматика общения</label
              >
              <select
                class="form-select"
                id="inputGroupSelect04"
                v-model="grammar"
              >
                <option selected>Choose...</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="мужской род">Мужской род</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary save">
              Save
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary close"
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="contentBotBlock"
      class="content-bot-block"
      style="display: none"
    ></div>

    <div class="col">
      <hr />
      <h5 class="subtitle">Загруженная информация</h5>
      <hr />
    </div>

    <div class="dropdown">
      <span @click="toggleDropdown">Подключение контента</span>
      <ul v-if="showDropdown" style="list-style-type: none">
        <li>
          <label for="opt1">content 1</label>
          <input
            type="checkbox"
            id="opt1"
            v-model="selectedOptionsMap['content 1']"
          />
        </li>
        <li>
          <label for="opt2">content 2</label>
          <input
            type="checkbox"
            id="opt2"
            v-model="selectedOptionsMap['content 2']"
          />
        </li>
        <li>
          <label for="opt3">content 3</label>
          <input
            type="checkbox"
            id="opt3"
            v-model="selectedOptionsMap['content 3']"
          />
        </li>
        <li>
          <label for="opt4">content 4</label>
          <input
            type="checkbox"
            id="opt4"
            v-model="selectedOptionsMap['content 4']"
          />
        </li>
        <li>
          <label for="opt5">content 5</label>
          <input
            type="checkbox"
            id="opt5"
            v-model="selectedOptionsMap['content 5']"
          />
        </li>
      </ul>
    </div>

    <div style="display: flex">
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect04"
          >Выбор контента</label
        >
        <select
          class="form-select"
          id="optionsList"
          aria-label="Default select example"
          v-model="selectedPromptName"
        >
          <option selected disabled>Просмотр/редактирование контента</option>
          <option
            v-for="prompt in prompts"
            :key="prompt.Name"
            :value="prompt.Name"
          >
            {{ prompt.Name }}
          </option>
        </select>
      </div>
    </div>

    <div class="input-group field">
      <span class="input-group-text">{{ selectedPrompt?.Name }}</span>
      <textarea class="form-control" aria-label="With textarea">
      {{ selectedPrompt?.Message }}  
      </textarea>
      <!-- <button class="btn btn-secondary">save</button> -->
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed, watchEffect, onMounted } from "vue";
import { AssistantFullInfo } from "../../../../types/assistant-full-info";
import { baseApiUrl } from "../../../../config";
import { Response } from "../../../../types/response";
import { Prompt } from "../../../../types/prompt";

const isModalOpen = ref(false);
const route = useRoute();

function openModal() {
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}

const assistant = ref<AssistantFullInfo>();

const lexical = ref<string>();
const communication = ref<string>("интеллигент");
const tone = ref<string>();
const grammar = ref<string>();

const selectedPromptName = ref<string>();
const prompts = ref<Prompt[]>([]);

const selectedPrompt = computed(() =>
  prompts.value.find(({ Name }) => Name === selectedPromptName.value)
);

const showDropdown = ref(false);

const selectedOptions = ref<string[]>([]);

const selectedOptionsMap = ref<Record<string, boolean>>({
  "content 1": false,
  "content 2": false,
  "content 3": false,
  "content 4": false,
  "content 5": false,
});
watchEffect(() => {
  selectedOptions.value = Object.keys(selectedOptionsMap.value).filter(
    (key) => selectedOptionsMap.value[key]
  );
});

onMounted(async () => {
  const response = await fetch(
    `${baseApiUrl}/admin/assistants/${route.params.code}`
  );
  const data: Response<AssistantFullInfo> = await response.json();
  console.log(data);
  const assistantData = data.data;
  assistant.value = assistantData;
  lexical.value = assistantData.personality.lexis.Name;
  communication.value = assistantData.personality.styles.Name;
  tone.value = assistantData.personality.tones.Name;
  grammar.value = assistantData.personality.grammar.Name;
  prompts.value = assistantData.content;
});

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
.save,
.close {
  width: 50%;
}
.open {
  margin-bottom: 15px;
  background: rgb(35, 84, 141);
}
.custom-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-dialog {
  background: #fff;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  padding: 20px;
}

.modal-content {
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-footer {
  display: block;
}

.btn-close {
  position: absolute;
  left: 0;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn {
  cursor: pointer;
}

h4 {
  margin: -55px 40px;
  position: absolute;
  color: #c7c7c7b9;
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
  animation: print 7s linear infinite;
}
.subtitle {
  margin: 0;
  padding-top: 0px;
}

@keyframes print {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 100%;
  }
}
/* .modal.fade {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.modal.fade.show {
  opacity: 1;
} */

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
  margin: 10px 0px 25px 0px;
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
