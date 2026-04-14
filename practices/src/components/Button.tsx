import React from 'react'

interface ButtonType {
    children : React.ReactNode,
    onClick? : () => void,
    varient? : 'primary' | 'danger' | 'ghost',
    disabled ? : boolean; 
}

const Button: React.FC<ButtonType> = ({
  children, onClick, varient = 'primary', disabled = false
}) => {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: '#3b82f6', color: '#fff' },
    danger:  { background: '#ef4444', color: '#fff' },
    ghost:   { background: 'transparent', border: '1px solid #888' },
  };
  return (
    <button style={styles[varient!]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button