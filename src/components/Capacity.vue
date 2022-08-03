<template>
  <div>
    <p>SpaceLeft {{spaceLeft}} of Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()"> Increase Capacity </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import useEventSpace from '../logic/useEvent'
export default {
    setup() {
        return { ...useEventSpace() }
    }
}
</script>

<style>

</style>