import * as React from 'react';

interface IProps {
	size: '2px' | '4px' | '8px' | '16px' | '32px'
}

export const Divider: React.FC<IProps> = ({size}) => {
  return <div style={{width: '100%', height: size}}></div>;
};
