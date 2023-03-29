<script lang="ts">
  interface OptionData {
    id: number;
    label: string;
    text: string;
  }
  export let option: OptionData;
  export let selectedAnsweOption: null | string;
  export let handleSelectedOption: (label: string) => void;
  export let showCorrectAnswer: boolean;
  export let answer: string;
</script>

<button
  class={`bg-gray-200 rounded w-[49%] text-center p-2 mb-4 py-5 ${
    option.label === selectedAnsweOption && 'bg-yellow-300'
  } ${
    showCorrectAnswer &&
    (answer === option.label ? 'bg-green-500' : 'bg-red-500')
  } `}
  on:click={() => handleSelectedOption(option.label)}
>
  {option.text}
</button>
