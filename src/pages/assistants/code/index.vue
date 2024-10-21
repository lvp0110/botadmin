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
    <RouterLink
      class="btn btn-primary"
      :to="`/assistants/${route.params.code}/edit`"
      >Редактировать</RouterLink
    >
    <div class="col">
        <label>
            <span>Характер</span>
            <select>
                <option value="1">Характер 1</option>
                <option value="2">Характер 2</option>
                <option value="3">Характер 3</option>
                <option value="4">Характер 4</option>
            </select>
        </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { AssistantFullInfo } from "../../../types/assistant-full-info";
import { baseApiUrl } from "../../../config";
import { Response } from "../../../types/response";

const route = useRoute();
const assistant = ref<AssistantFullInfo>();

onMounted(async () => {
  const response = await fetch(
    `${baseApiUrl}/admin/assistants/${route.params.code}`
  );
  const data: Response<AssistantFullInfo> = await response.json();

  const assistantData = data.data;
  assistant.value = assistantData;
});
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
