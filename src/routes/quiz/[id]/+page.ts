import quizes from '../../../data.json';
import { error } from '@sveltejs/kit';

export const load = ({ params }: { params: { id: string } }) => {
  const quiz = quizes.find((q) => q.id === parseInt(params.id));
  if (!quiz) {
    throw error(404, {
      message: 'Not found',
    });
  }
  return quiz;
};
