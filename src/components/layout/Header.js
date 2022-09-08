import {Fragment} from 'react';
import classes  from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealImage from '../../assets/meals.jpg'
export default function Header() {
  return (
    <Fragment>
       <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
       </header>
       <div className={classes['main-image']}>
        <img src={mealImage} alt='A table full of delicious food!'/>
       </div>
    </Fragment>
  )
}

