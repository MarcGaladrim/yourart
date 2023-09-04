import classNames from 'classnames';
import React, { FC } from 'react';

type IconTextProps = {
  icon: React.ReactNode;
  label: React.ReactNode;
  labelClassname?: string;
  center?: boolean;
};

const IconText: FC<IconTextProps> = ({
  icon,
  label,
  labelClassname,
  center,
}) => {
  return (
    <div
      className={classNames('flex flex-row items-center gap-x-2', {
        'mx-auto': center,
      })}
    >
      {icon}
      <p className={labelClassname}>{label}</p>
    </div>
  );
};

export default IconText;
