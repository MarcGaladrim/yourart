import React, { FC } from 'react';

type BreadcrumbsProps = {
  breadcrumbs: string[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className="flex flex-row gap-x-4">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex flex-row gap-x-4">
          <p
            className={'font-semibold capitalize text-gray-500 last:text-black'}
          >
            {breadcrumb}
          </p>
          {index !== breadcrumbs.length - 1 && (
            <p className="text-gray-500">{'>'}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
