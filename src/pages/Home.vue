<script setup>
import { computed, ref } from "vue";
import Navbar from "../components/Navbar.vue";

const newList = ref("");
const newRating = ref(1);
let deleteArray = ref([]);
const correctArray = ref([]);
const filters = ref("All");
const todos = ref([
  { rating: 1, list: "swimming", completed: false },
  { rating: 2, list: "basketball", completed: false },
  { rating: 3, list: "badminton", completed: false },
]);
// computed ============
const filterTodos = computed(() => {
  if (filters.value === "All") return todos.value;
  else if (filters.value === "Delete") return deleteArray.value;
  else if (filters.value === "Complete") {
    return todos.value.filter((todo) => todo.completed === true);
  } else if (filters.value === "Incomplete") {
    return todos.value.filter((todo) => todo.incomplete === false);
  } else if (filters.value === "ratingAscend") {
    return todos.value.sort((a, b) => a.rating - b.rating);
  }
});
// functions============
function addButton() {
  if (newList.value === "") return;
  todos.value.push({
    list: newList.value,
    rating: newRating.value,
  });
  newList.value = "";
}
function removeTodos(index) {
  deleteArray.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}
function undoDeletedTodos() {
  deleteArray.value.forEach((todo) => {
    todos.value.push(todo);
  });
  deleteArray.value = [];
}
function undoBt(index) {
  todos.value.push(deleteArray.value[index]);
  deleteArray.value.splice(index, 1);
  if (todos.value.length > 3) return alert("please enter a task", newList.value);
}
</script>

<template>
  <div class="px-7 py-8 sm:px-20 sm:py-10 bg-slate-300 w-full min-h-screen lg:w-[80%] mx-auto">
    <h1 class="text-3xl xl:text-4xl 2xl:text-4xl font-bold">Todo App</h1>
    <div class="flex flex-col pt-10">
      <div class="">
        <div class="flex">
          <!-- input of text -->
          <input
            class="w-[80%] sm:w-[30%] px-2 xl:text-xl xl:py-2 rounded-md"
            type="text"
            placeholder="press enter "
            v-model="newList"
            @keyup.enter.prevent="addButton"
          />
          <button class="ml-2 px-3 text-white rounded-md py-1 2xl:text-xl bg-slate-700" @click.prevent="addButton">
            Add
          </button>
          <!-- input of number -->
          <input
            class="ml-5 bg-slate-700 text-white px-2 py-1 2xl:text-lg"
            type="number"
            placeholder="enter rating"
            v-model="newRating"
            min="1"
            max="5"
          />
          <!-- select options============== -->
          <select name="Filter" v-model="filters" class="w-[9%] sm:w-[25%] 2xl:w-[30%] 2xl:text-lg">
            <option value="All">All</option>
            <!-- <option value="Delete">Delete</option> -->
            <option value="Complete">Complete</option>
            <!-- <option value="Incomplete">Incomplete</option> -->
            <option value="ratingAscend">Sort ascend by importance</option>
          </select>
          <!-- <button v-if="deleteArray.length > 0" @click.prevent="undoDeletedTodos">Undo deleted todos</button> -->
        </div>

        <div class="flex-col items-center pt-10 w-full sm:w-[74%] space-y-5">
          <!-- loop todos =========-->
          <div
            class="flex items-center justify-between border-slate-800 border-2 mt-5 px-4 py-7"
            v-for="(todo, index) in filterTodos"
            :key="index"
          >
            <div class="flex items-center">
              <span class="text-lg font-bold 2xl:text-2xl">Rating</span>
              :
              <p class="text-md font-semibold ml-2 2xl:text-2xl">{{ todo.rating }}</p>
            </div>
            <h1 :class="{ done: todo.completed }">
              <p class="text-slate-600 text-base sm:text-lg font-bold 2xl:text-2xl">{{ todo.list }}</p>
            </h1>
            <div class="flex items-center">
              <button
                class="ml-2 sm:mr-2 p-1 sm:px-3 sm:py-2 bg-red-600 text-base rounded-md text-white 2xl:text-2xl"
                @click.prevent="removeTodos(index)"
              >
                Delete
              </button>
              <div class="ml-2 sm:ml-0"><input class="" type="checkbox" v-model="todo.completed" /></div>
            </div>
            <!-- <button
              class="px-3 py-1 bg-yellow-600 text-white rounded-md"
              v-if="todos.length > 3"
              @dblclick.prevent="undoBt(index)"
            >
              Undo
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
}
</style>
