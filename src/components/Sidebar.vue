<script setup>
import { AcademicCapIcon, ClipboardCheckIcon } from "@heroicons/vue/outline";
</script>

<template>
  <aside class="bg-slate-800 min-h-screen hidden flex-none lg:flex lg:w-[30%] text-white">
    <div class="">
      <div class="flex items-center pt-7 ml-4">
        <AcademicCapIcon class="w-10 h-10 2xl:w-15 2xl:h-15" />
        <h1 class="text-2xl font-bold ml-3 2xl:text-3xl">Multi Web App</h1>
      </div>

      <div class="flex items-center pt-5 ml-6 hover:text-slate-600 transform ease-in-out duration-150">
        <ClipboardCheckIcon class="w-8 h-8 2xl:w-10 2xl:h-10" />
        <router-link to="/" class="text-xl font-bold ml-3 2xl:text-2xl">Todo App</router-link>
      </div>
      <div class="flex items-center pt-5 ml-6 hover:text-slate-600 transform ease-in-out duration-150">
        <ClipboardCheckIcon class="w-8 h-8 2xl:w-10 2xl:h-10" />
        <router-link to="/hangman" class="text-xl font-bold ml-3 2xl:text-2xl">Hangman App</router-link>
      </div>
      <div class="flex items-center pt-5 ml-6 hover:text-slate-600 transform ease-in-out duration-150">
        <ClipboardCheckIcon class="w-8 h-8 2xl:w-10 2xl:h-10" />
        <router-link to="/tic-tac-toe" class="text-xl font-bold ml-3 2xl:text-2xl">Tic Tac Toe App</router-link>
      </div>
    </div>
  </aside>
</template>
