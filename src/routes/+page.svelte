<script lang="ts">
  import Card from '../components/Card.svelte';
  import quizes from '../data.json';
</script>

{#each quizes as quiz (quiz.id)}
  <Card {quiz} />
{/each}
