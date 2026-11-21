export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`gradient-ring overflow-hidden rounded-2xl bg-panel/70 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
