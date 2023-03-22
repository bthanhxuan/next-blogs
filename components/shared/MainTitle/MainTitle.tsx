import cls from 'classnames';
import { Button } from '../Button';
import styles from './MainTitle.module.css';

type MainTitleType = {
  children?: string,
  btnLabel?: string,
  type?: string,
  btnProps?: Record<string, any>,
  [key: string]: any,
}

function MainTitle(props: MainTitleType) {

  const { children, btnLabel, type = '', btnProps = {} } = props;

  const classes = cls(`${styles['main-title']} spacing`, {
    [styles['main-title__search']]: type === 'search',
    'd-flex tcl-jc-between tcl-ais-center': btnLabel,
  });

  return (
    <div className={classes}>
      <h2>{children}</h2>
      {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
    </div>
  );
}

MainTitle.defaultProps = {
  children: '',
  btnLabel: '',
  type: '',
  btnProps: {}
}

export default MainTitle;
