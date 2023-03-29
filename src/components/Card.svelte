<script lang="ts">
  import * as images from '../image';
  import { goto } from '$app/navigation';
  interface Quiz {
    id: number;
    name: string;
    imageUrl: 'chemistry' | 'biology';
    questions: {
      id: number;
      text: string;
      answer: string;
      options: { id: number; text: string; label: string }[];
    }[];
  }

  export let quiz: Quiz;
</script>

<button on:click={() => goto(`/quiz/${quiz.id}`)}>
  <div class="shadow rounded overflow-hidden cursor-pointer m-2 w-[250px]">
    <img src={images[quiz.imageUrl]} class="h-44" alt="" />
    <div class="py-3 px-2 flex  justify-between items-center">
      <h1 class="font-bold">{quiz.name}</h1>
      <p>{quiz.questions.length} questions</p>
    </div>
  </div>
</button>
