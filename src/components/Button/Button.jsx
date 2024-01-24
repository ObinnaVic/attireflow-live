import clsx from 'clsx';
import classes from './button.module.css';

function Button({ variant = 'solid', className, children, ...otherProps }) {
  /*
   * You can override the default styles by adding a className
   * clsx is a utility library used for handling the application of conditional CSS classes
   * */
  const validVariantValues = ['solid', 'outline'];

  const btnStyles = clsx({
    [className]: className,
    [classes.base]: true,
    [classes[variant]]: validVariantValues.includes(variant),
  });
  return (
    <button className={btnStyles} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
