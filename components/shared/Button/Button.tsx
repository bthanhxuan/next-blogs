import cls from 'classnames';
import IconLoading from '../IconLoading';
import styles from './Button.module.css';

type ButtonType = {
  type?: string,
  loading?: boolean,
  loadingPos?: string,
  size?: string,
  as?: string,
  htmlType?: "button" | "submit" | "reset" | undefined,
  className?: string,
  children?: string,
  restProps?: Record<string, any>
  [key: string]: any,
}

function Button({
  type = 'default',
  loading,
  loadingPos = 'left',
  size,
  as = 'button',
  htmlType,
  className,
  children,
  ...restProps
}: ButtonType) {
  const classes = cls(
    styles['btn'],
    {
      [styles['btn-default']]: type === 'default',
      [styles['btn-category']]: type === 'category',
      [styles['btn-primary']]: type === 'primary',
      [styles['btn-size-large']]: size === 'large',
    },
    className
  );

  const content = (
    <>
      {loading && loadingPos === 'left' && <IconLoading />}
      {children}
      {loading && loadingPos === 'right' && <IconLoading />}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps,
  };

  if (as === 'a') {
    return <a {...injectedProps}>{content}</a>;
  }

  return <button {...injectedProps}>{content}</button>;
}

Button.defaultProps = {
  type: 'default',
  loading: false,
  loadingPos: 'left',
  size: '',
  as: 'button',
  htmlType: 'button',
  restProps: {}
}

export default Button;
