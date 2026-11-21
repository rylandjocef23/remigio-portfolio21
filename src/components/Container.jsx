export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto w-full max-w-5xl px-5 ${className}`}>{children}</Tag>;
}
