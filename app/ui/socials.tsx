"use client";

import { useEffect, useState } from "react";

export type SocialDto = {
  name: string;
  url: string;
  iconName: string;
  color: string;
};

export default function Socials(props: { socials: SocialDto[] }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setIsRendered(true);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-center">
        {isRendered ?
					props.socials.map((social, i) => (
						<a
							className="brand"
							href={social.url}
							target="_blank"
							aria-label={social.name}
							rel="me"
							key={i}
						>
							<span
								className="iconify-inline"
								data-icon={social.iconName}
								style={{ color: social.color }}
							></span>
						</a>
					)) : props.socials.map((social, i) => (
						<a
							className="brand"
							href={social.url}
							target="_blank"
							aria-label={social.name}
							rel="me"
							key={i}
						></a>
					))
				}
      </div>
    </nav>
  );
}
