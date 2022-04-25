<script setup>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <!-- sidebar -->
  <div class="flex-none lg:flex">
    <Sidebar />
    <Navbar />
    <router-view />
  </div>
</template>
