<template>
  <div v-if="loadingStatus === LoadingStatus.Loading">
    <b-spinner variant="primary"></b-spinner>
  </div>
  <template v-else-if="loadingStatus === LoadingStatus.Resolved">
    <div class="menu" style="margin: 20px">
      <input
        type="checkbox"
        ref="menu"
        id="burger-checkbox"
        class="burger-checkbox"
      />
      <label for="burger-checkbox" class="burger"></label>
      <ul class="menu-list">
        <li>
          <RouterLink
            class="btn btn-primary"
            to="/assistants"
            @click.native="handleBlur"
          >
            Асистенты
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="btn btn-primary"
            to="/characters"
            @click.native="handleBlur"
          >
            Характеры
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="btn btn-primary"
            to="/attributes"
            @click.native="handleBlur"
          >
            Атрибуты
          </RouterLink>
        </li>
      </ul>
    </div>
    {{ props }}
    <br />
    <br />
    {{ prop }}
    <RouterView></RouterView>
  </template>
</template>

<script setup lang="ts">
import { useTemplateRef } from "vue";
import { ref, onMounted } from "vue";
import { LoadingStatus } from "./types/loading-status.ts";

const checkbox = useTemplateRef<HTMLInputElement>("menu");

const loadingStatus = ref(LoadingStatus.Loading);
const props = ref([]);
const prop = ref();

onMounted(async () => {
  try {
    const response = await fetch(
      "http://localhost:3007/admin/personality/props"
    );

    if (response.ok) {
      const json = await response.json();
      props.value = json.data.map(({ prop_type }) => prop_type);
      loadingStatus.value = LoadingStatus.Resolved;

      const response2 = await fetch(
        `http://localhost:3007/admin/personality/props/lexis`
      );
      const json2 = await response2.json();
      prop.value = json2.data;

      
    } else {
      loadingStatus.value = LoadingStatus.Rejected;
    }
  } catch {
    loadingStatus.value = LoadingStatus.Rejected;
  }
});

const handleBlur = () => {
  if (checkbox.value) {
    checkbox.value.checked = false;
  }
};
</script>

<style scoped>
.btn-group {
  display: flex;
}

.btn-primary {
  width: 100%;
  background: rgb(35, 84, 141);
  border: none;
}

.btn-check:checked + .btn,
:not(.btn-check) + .btn:active,
.btn:first-child:active,
.btn.active,
.btn.show {
  background: #fff;
  color: rgb(35, 84, 141);
  border-radius: 0;
  font-size: large;
}

.burger-checkbox {
  position: absolute;
  visibility: hidden;
}

.burger {
  position: relative;
  z-index: 4;
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 35px;
  height: 26px;
}

.burger::before,
.burger::after {
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: rgb(35, 84, 141);
  transition: background 0.3s;
}

.burger::before {
  top: 0;
  box-shadow: 0 11px 0 rgb(35, 84, 141);
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
}

.burger::after {
  bottom: 0;
  transition: bottom 0.3s 0.15s, transform 0.3s;
}

.burger-checkbox:checked + .burger::before,
.burger-checkbox:checked + .burger::after {
  background: #fff;
}

.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}

.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
}

.menu-list {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 60px 0;
  margin: 0;
  background: rgb(35, 84, 141);
  list-style-type: none;
  transform: translateX(-100%);
  transition: 0.3s;
  min-width: 160px;
  height: 100vh;
  z-index: 3;
}

.menu-item {
  display: block;
  padding: 10px;
  margin: 0;
  color: white;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.2);
}

.burger-checkbox:checked ~ .menu-list {
  transform: translateX(0);
  z-index: 3;
}
</style>
