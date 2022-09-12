<script setup lang="ts">
import { Todo } from '@/models/todo';
const { data, refresh } = await useAsyncData<Todo[]>(() => {
  return $fetch("/api/todo");
});

const toggleTodoStatus = (id) => {
  // toggle todo
  $fetch(`/api/todo/${id}`, {
    method: "PUT",
  }).then(() => {
    refresh();
  });
}

let todo = reactive({
  title: "",
  body: "",
});

const addTodo = async () => {
  await $fetch("/api/todo", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  refresh();
  todo.title = "";
  todo.body = "";
};

</script>

<template>
  <div
    class="text-slate-800 dark:text-white h-full flex flex-col justify-center items-center max-w-lg space-y-3 mx-auto">
    <Panel>
      <template v-slot:header>
        <h3 class="text-lg leading-6 font-medium ">
          Tasks
        </h3>
      </template>
      <template v-slot:content>
        <fieldset class="space-y-5">
          <legend class="sr-only">Todos</legend>
          <div v-for="item,i in data" class="relative flex items-start">
            <div class="flex h-5 items-center">
              <input :id="`candidates-${i}`" aria-describedby="candidates-description" name="candidates" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-700/50 dark:border-gray-600"
                @change="toggleTodoStatus(item.id)" :checked="item.completed" />
            </div>
            <div class="ml-3 text-sm dark:text-white/80">
              <label :for="`candidates-${i}`" class="font-medium">{{ item.title }}</label>
              <p id="candidates-description" class="text">{{ item.body }}</p>
            </div>
          </div>
        </fieldset>
      </template>
    </Panel>

    <Panel>
      <template v-slot:header>
        <h3 class="text-lg font-medium leading-6">Add Todo</h3>
      </template>

      <template v-slot:content>
        <div class="mt-5 sm:flex sm:items-end sm:justify-between">
          <div class="w-full sm:max-w-xs flex flex-col space-y-4">
            <div>
              <label for="title" class="block text-sm font-medium">Title</label>
              <div class="mt-1">
                <input type="text" name="title" id="title"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-700/50 dark:border-gray-600"
                  placeholder="Title" v-model="todo.title" />
              </div>
            </div>
            <div>
              <label for="content" class="block text-sm font-medium">Content</label>
              <div class="mt-1">
                <input type="text" name="content" id="content"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-slate-700/50 dark:border-gray-600"
                  placeholder="Content" v-model="todo.body" />
              </div>
            </div>
          </div>
          <button type="submit" @click="addTodo"
            class="mt-3 inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white">Add</button>
        </div>
      </template>
    </Panel>
  </div>




</template>

<style>
html,
body {
  @apply h-full w-full;
}

@media (prefers-color-scheme: light) {

  div#__nuxt,
  #__layout,
  #__layout>div,
  #app {
    /* background-size: 40px 40px;
    background-image:
      linear-gradient(to right, grey 1px, transparent 1px),
      linear-gradient(to bottom, grey 1px, transparent 1px); */
    @apply h-full w-full bg-gray-200;
    /* mask-image: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0.6)); */
  }
}


@media (prefers-color-scheme: dark) {

  div#__nuxt,
  #__layout,
  #__layout>div,
  #app {
    @apply h-full w-full bg-slate-900;
    /* background-size: 40px 40px;
    background-image:
      linear-gradient(to right, grey 1px, transparent 1px),
      linear-gradient(to bottom, grey 1px, transparent 1px);
    mask-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.9)); */
  }
}
</style>