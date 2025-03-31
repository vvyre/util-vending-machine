import { HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { headingRecipe } from './heading.css';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & RecipeVariants<typeof headingRecipe>;

export function Heading({ size = 'L', ...props }: HeadingProps) {
  return <h2 className={headingRecipe({ size })} {...props} />;
}
