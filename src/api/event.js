import { ref } from 'vue';
function getEventCount(value) {
    const attendees = [
      'Bob',
      'John',
      'cena',
      "moly",
      "jenna",
      "king",
      "Charles",
      "Victor",
      "Miley",
      "jake",
      "Raina",
      "Dhoni",
      "Kylie",
      "Mason",
      "Reed",
      "Kendrick",
      "Jane",
      "Lesslie",
      "Aston",
      "Milah",
      "Camilla",
      "Von",
      "Mike",
      "Mayor"
    ];
  
   
  return attendees.filter(a => a.toLowerCase() == value.toLowerCase()).length;
}

export default {
  getEventCount
}