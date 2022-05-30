import React from 'react';

interface ListProps {
  children: (data: any) => React.ReactNode,
  options: any,
  className?: string,
}

const List: React.FC<ListProps> = ({
  children: renderLabel,
  options,
  className = "",
}) => {

  const nodeElements = options.map((element: any) => renderLabel(element));

  return (
    <div className={className}>
      {nodeElements}
    </div>
  )
};

export default List;
