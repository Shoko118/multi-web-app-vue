<script setup>
import { computed, ref } from "vue";
const tries = ref(5);
const emptyArray = ref([]);
const words = ref(["S", "O", "F", "T", "W", "A", "R", "E"]);
const letters = ref([
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
]);
// computed
const guessWords = computed(() => {
  return words.value.map((word) => {
    if (emptyArray.value.includes(word)) return word;
    else return "X";
  });
});
// function
function addLetters(letter) {
  const insideWord = words.value.includes(letter);
  console.log(insideWord);
  if (tries.value === 0) return alert("you have failed the game");
  else if (insideWord === false) tries.value = tries.value - 1;
  else emptyArray.value = emptyArray.value + letter;
}
</script>

<template>
  <div class="px-7 py-8 sm:px-10 sm:py-10 bg-slate-300 w-full min-h-screen lg:w-[80%] mx-auto">
    <h1 class="text-3xl xl:text-4xl 2xl:text-4xl font-bold">Hangman App</h1>
    <div class="pt-10">
      <h1 class="text-2xl font-semibold">Tries Left {{ tries }}</h1>

      <h2 class="text-2xl font-semibold space-x-2">
        Guess this:
        <span class="words font-bold inline" v-for="(word, index) in guessWords" :key="index">{{ word }}</span>
      </h2>

      <h2 class="text-lg sm:text-2xl font-semibold sm:space-x-2 lg:space-x-2 xl:space-x-3">
        Pick choices:
        <span
          class="letters text-lg sm:text-2xl font-bold cursor-pointer hover:text-blue-500"
          v-for="(letter, index) in letters"
          :key="index"
          @click.prevent="addLetters(letter)"
          >{{ letter }}</span
        >
      </h2>
    </div>
  </div>
</template>
