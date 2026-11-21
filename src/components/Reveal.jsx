// Fades and slides its content in when `show` becomes true. Users who prefer reduced motion see it immediately.
export default function Reveal({ show, delay = 0, as: Tag = 'div', className = '', children }) {
  const motion = show ? 'motion-safe:animate-rise' : 'motion-safe:opacity-0';
  return (
    <Tag className={`${motion} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
