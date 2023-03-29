<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Button from '../../../components/Button.svelte';
  import ProgressCircle from '../../../components/ProgressCircle.svelte';
  import QuestionOption from '../../../components/QuestionOption.svelte';
  import QuestionText from '../../../components/QuestionText.svelte';
  import { answers, type Answer } from '../../../store';

  export let data: any;
  let currentQuestionIndex = 0;
  let answerValue: Answer[];
  let showCorrectAnswer = false;

  $: currentQuestion = data.questions[currentQuestionIndex];
  let selectedAnsweOption: null | string = null;
  const handleSelectedOption = (label: string) => {
    selectedAnsweOption = label;
  };

  const handleSubmit = () => {
    if (!selectedAnsweOption) return;
    showCorrectAnswer = true;
    answers.update((currentState) => {
      const updatedAnswerState = currentState;
      updatedAnswerState[currentQuestionIndex].isCorrect =
        selectedAnsweOption === currentQuestion.answer;
      return updatedAnswerState;
    });
  };

  answers.subscribe((value) => {
    answerValue = value;
  });

  const handleNext = () => {
    showCorrectAnswer = false;
    selectedAnsweOption = null;
    if (currentQuestionIndex === data.questions.length - 1) {
      goto('/results');
    } else {
      currentQuestionIndex++;
    }
  };

  onMount(() => {
    answers.set(
      data.questions.map((question: any) => {
        return {
          id: question.id,
          isCorrect: null,
        };
      })
    );
  });
</script>

<div class="w-full">
  <div class="flex justify-center">
    {#each answerValue as answer (answer.id)}
      <ProgressCircle isCorrect={answer.isCorrect} />
    {/each}
  </div>
  <QuestionText question={currentQuestion.question} />
  <div class="flex justify-between flex-wrap  cursor-pointer">
    {#each currentQuestion.options as option (option.id)}
      <QuestionOption
        {option}
        {handleSelectedOption}
        {selectedAnsweOption}
        {showCorrectAnswer}
        answer={currentQuestion.answer}
      />
    {/each}
  </div>
  <Button {handleSubmit} {showCorrectAnswer} {handleNext} />
</div>
