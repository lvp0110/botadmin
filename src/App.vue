<template>
  <!-- <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
      :class="{ active: route.params.code === 'neurobrand' }"
      class="btn btn-primary"
      to="/content/neurobrand"
      >НейроБренд</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
      :class="{ active: route.params.code === 'constructorbrand' }"
      class="btn btn-primary"
      to="/content/constructorbrand"
      >КонструкторБот</RouterLink
    >
          </li>
          <li class="nav-item">
            <RouterLink
      :class="{ active: route.params.code === 'agosha' }"
      class="btn btn-primary"
      to="/content/agosha"
      >АГоша</RouterLink
    >
          </li>
        </ul>
        <span class="navbar-text"> Navbar text with an inline element </span>
      </div>
    </div>
  </nav> -->
  
    <div class="menu" style="margin: 20px;">
        <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
        <label for="burger-checkbox" class="burger"></label>
        <ul class="menu-list">
            <li> <RouterLink
      :class="{ active: route.params.code === 'NeuroBrand' }"
      class="btn btn-primary"
      to="/content/NeuroBrand"
      >НейроБренд</RouterLink
    >
            </li>
            <li><RouterLink
      :class="{ active: route.params.code === 'ConstructorBrand' }"
      class="btn btn-primary"
      to="/content/ConstructorBrand"
      >КонструкторБот</RouterLink
    >
            </li>
            <li><RouterLink
      :class="{ active: route.params.code === 'AGosha' }"
      class="btn btn-primary"
      to="/content/AGosha"
      >АГоша</RouterLink
    >
            </li>
           
        </ul>
    </div>
  
  <!-- <div class="btn-group">
    <RouterLink
      :class="{ active: route.params.code === 'neurobrand' }"
      class="btn btn-primary"
      to="/content/neurobrand"
      >НейроБренд</RouterLink
    >
    <RouterLink
      :class="{ active: route.params.code === 'constructorbrand' }"
      class="btn btn-primary"
      to="/content/constructorbrand"
      >КонструкторБот</RouterLink
    >
    <RouterLink
      :class="{ active: route.params.code === 'agosha' }"
      class="btn btn-primary"
      to="/content/agosha"
      >АГоша</RouterLink
    >
  </div> -->
  
  
  <RouterView> </RouterView>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
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
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
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
        margin-top: -10px;
        
    }

    .burger::before,
    .burger::after {
        content: '';
        left: 0;
        position: absolute;
        display: block;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background: rgb(35, 84, 141);
        transition: background .3s;
    }

    .burger::before {
        top: 0;
        box-shadow: 0 11px 0 rgb(35, 84, 141);
        transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
    }

    .burger::after {
        bottom: 0;
        transition: bottom .3s .15s, transform .3s;
    }

    .burger-checkbox:checked+.burger::before,
    .burger-checkbox:checked+.burger::after {
        background: #fff;
    }
    .burger-checkbox:checked+.burger::before {
        top: 11px;
        transform: rotate(45deg);
        box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
        transition: box-shadow .15s, top .3s, transform .3s .15s;
    }

    .burger-checkbox:checked+.burger::after {
        bottom: 11px;
        transform: rotate(-45deg);
        transition: bottom .3s, transform .3s .15s;
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
        transition: .3s;
        min-width: 160px;
        height: 100vh;
        z-index: 3;
    }

    .menu-item {
        display: block;
        padding:10px;
        margin: 0;
        color: white;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
    }

    .menu-item:hover {
        background: rgba(255, 255, 255, .2)
    }

    .burger-checkbox:checked~.menu-list {
        transform: translateX(0);
        z-index: 3;
    } 
    
</style>
