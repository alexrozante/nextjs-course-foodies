import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
        <p>Chosse your favorite recipe and cook it youtself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/mease/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
