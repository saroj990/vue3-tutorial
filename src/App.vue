<script setup>
import Cap from "./components/Cap.vue";
import Capacity from "./components/Capacity.vue";
import Search from "./components/Search.vue";
import BaseLayout from "./components/Layout.vue";
import SubmitButton from "./components/SubmitButton.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <div>
    <Capacity />
    <Cap />
    <Search />
    <BaseLayout>
      <template v-slot:header>
        <h1>Here is the header</h1>
      </template>
      <p>A paragraph for the main content</p>
      <template v-slot:footer> I might be a footer </template>
    </BaseLayout>
    <SubmitButton> Save </SubmitButton>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
