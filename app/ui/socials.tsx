type Social = {
  name: string;
  url: string;
  iconName: string;
  color: string;
};

export default function Socials(socials: Social[]) {
  return (
    <nav className="nav">
      <div className="nav-center">
        {socials.map((social, i) => (
          <a
            className="brand"
            href="{{ social.url }}"
            target="_blank"
            aria-label="{{ social.name }}"
            rel="me"
						key={i}
          >
            <span
              className="iconify-inline"
              data-icon="{{ social.icon }}"
              style={{ color: social.color }}
            ></span>
          </a>
        ))}
      </div>
    </nav>
  );
}
