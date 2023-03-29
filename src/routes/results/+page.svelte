<script lang="ts">
  import { answers, type Answer } from '../../store';

  let answerValue: Answer[] = [];

  answers.subscribe((value) => {
    answerValue = value;
  });
  const correctAnswersValues = answerValue.filter((an) => an.isCorrect).length;
</script>

<div class="text-center">
  <h3>{((correctAnswersValues / answerValue.length) * 100).toFixed(0)}%</h3>
  <p>{correctAnswersValues}/{answerValue.length}</p>
  <button>Go Back</button>
</div>
