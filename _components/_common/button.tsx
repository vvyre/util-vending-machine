import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ButtonHTMLAttributes } from 'react';
import { buttonRecipe } from './button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & RecipeVariants<typeof buttonRecipe>;

export function Button({ ui, color, ...props }: Props) {
  return <button className={buttonRecipe({ ui, color })} {...props} />;
}
