<template>
  <div
    class="divide-y divide-gray-200 dark:bg-slate-800 dark:divide-gray-600 overflow-hidden rounded-lg bg-white shadow w-full">
    <div class="px-4 py-5 sm:px-6">
      <slot name="header"></slot>
    </div>
    <div class="sm:px-6 lg:px-8 px-4 pb-5">
      <slot name="content"></slot>
    </div>
  </div>
</template>