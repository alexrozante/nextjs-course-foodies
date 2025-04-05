import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';

export default function ShareMealPage() {
  // Ao adicionar 'user server' estamos criando uma 'server action'
  // Uma função que só executa no servidor
  // Uma server action them que ser async
  // Esta é uma feature do React, que requer um framwork como o Next.js
  async function shareMeal(formData) {
    'use server';
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

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form
          className={classes.form}
          action={shareMeal}
        >
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              required
            />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              required
            />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker
            name='image'
            label='Your image'
          />
          <p className={classes.actions}>
            <button type='submit'>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
