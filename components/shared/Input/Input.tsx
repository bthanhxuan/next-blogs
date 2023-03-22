import cls from 'classnames';
import React, { ReactElement, useState } from 'react';
import IconSearch from '../IconSearch';
import styles from './Input.module.css';

type InputType = {
  label?: string,
  type: string,
  className?: string,
  icon: ReactElement,
  [key: string]: any,
}

function Input(props: InputType) {
  const {
    label,
    type,
    className,
    icon,
    ...restprops
  } = props;
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === 'password') {
      setLocalType('text');
    } else if (localType === 'text') {
      setLocalType('password');
    }
  }

  const classesIconPwd = cls(styles['toggle-password'], {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text',
  });
  const classesSearch = cls(styles['input-search__input'], className);

  if (type === 'search') {
    return (
      <div className={styles["input-search"]}>
        {icon}
        <input className={classesSearch} type={localType} {...restprops} />
      </div>
    );
  }

  return (
    <div className={styles["form-control"]}>
      {label && <label>{label}</label>}
      {type === 'password' && (
        <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>
      )}
      <input type={localType} className={className} {...restprops} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  icon: <IconSearch />,
}

export default Input;
