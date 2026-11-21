import { Link } from 'react-router-dom';

const base =
  'relative inline-flex items-center justify-center rounded-full px-7 py-3 font-bold transition duration-200 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0';

const variants = {
  primary: 'bg-brand text-night hover:shadow-[0_10px_30px_rgba(167,139,250,0.35)]',
  ghost: 'gradient-ring text-slate-100 [--ring-opacity:1] hover:bg-violet-400/10',
};

// Renders a router <Link> (to), a plain <a> (href), or a <button>.
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
