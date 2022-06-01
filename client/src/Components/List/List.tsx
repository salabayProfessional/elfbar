import React from 'react';
import "./List.scss";

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
    <ul className={"list " + className}>
      {nodeElements}
    </ul>
  )
};

export default List;
