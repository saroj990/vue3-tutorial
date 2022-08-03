import { ref, computed } from 'vue';

export default function useEventSpace() {
    const capacity = ref(3);
    const attendees = ref(['Bob', 'John', 'cena']);
    const  increaseCapacity = () => {
        capacity.value++;
    };
    const spaceLeft= computed(() => {
        return capacity.value - attendees.value.length;
    });
    return { capacity, increaseCapacity, spaceLeft, attendees };
}