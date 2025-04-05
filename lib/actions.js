'use server';

// Ao adicionar 'user server' estamos criando uma 'server action'
// Uma função que só executa no servidor
// Uma server action them que ser async
// Esta é uma feature do React, que requer um framwork como o Next.js
export async function shareMeal(formData) {
  const mealData = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
  };
  console.log(mealData);
}
