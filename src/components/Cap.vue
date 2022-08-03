<template>
  <div>
    <p>SpaceLeft {{spaceLeft}} of Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()"> Increase Capacity </button>
    <ul>
        <li v-for="(name, index) in attendees" :key="index">
            {{name}}
        </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

export default {
    setup() {
        const event = reactive({
            capacity: 3,
            attendees: ['Bob', 'John', 'cena'],
            spaceLeft: computed(() => event.capacity - event.attendees.length)
        });
        const increaseCapacity = () => {
            event.capacity++;
        }
        return { ...toRefs(event), increaseCapacity };
    }
}
</script>

<style>

</style>