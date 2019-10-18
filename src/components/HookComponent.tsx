import React, { useState } from 'react';

import styles from './HookComponent.module.scss';

const HookComponent: React.FC<{}> = () => {
  const [value, setValue] = useState(true);

  return (
    <button className={styles.button} onClick={(): void => setValue((val) => !val)}>
      <span className={styles.text}>{ value ? 'On' : 'Off' }</span>
    </button>
  );
};

export default HookComponent;
