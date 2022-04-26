<script setup></script>

<template>
  <div>
    <div
      class="grid grid-rows-4 gap-4 px-10 sm:px-0 text-center sm:text-left sm:flex sm:justify-around lg:hidden py-8 bg-slate-800 text-white"
    >
      <div
        class="bg-slate-600 px-2 py-2 md:px-3 md:py-2 rounded-md hover:bg-slate-500 transform ease-in-out duration-150"
      >
        <router-link to="/" class="font-bold text-xs md:text-xl">Todo App</router-link>
      </div>
      <div
        class="bg-slate-600 px-2 py-2 md:px-3 md:py-2 rounded-md hover:bg-slate-500 transform ease-in-out duration-150"
      >
        <router-link to="/hangman" class="font-bold text-xs md:text-xl">Hangman</router-link>
      </div>
      <div
        class="bg-slate-600 px-2 py-2 md:px-3 md:py-2 rounded-md hover:bg-slate-500 transform ease-in-out duration-150"
      >
        <router-link to="/tic-tac-toe" class="font-bold text-xs md:text-xl">Tic Tac Toe</router-link>
      </div>
    </div>
  </div>
</template>
