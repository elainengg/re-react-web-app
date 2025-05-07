import { Link } from 'react-router-dom';

type NavigationBoxProps = {
  header_photo: string;
  list_of_links: { label: string; to: string }[]; // label = text, to = path
};

export default function NavigationBox({ header_photo, list_of_links }: NavigationBoxProps) {
  return (
    <div id="navigation-box" style={{ textAlign: 'center' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem' }}>
        {list_of_links.map((link, index) => (
          <Link key={index} to={link.to} style={{ textDecoration: 'none', color: 'black' }}>
            {link.label}
          </Link>
        ))}
      </nav>
      <img src={header_photo} alt="Header" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
