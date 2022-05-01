interface LinksProps {
  links: { name: string; href: string }[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <a href={link.href} key={link.name}>
          {' '}
          {link.name}{' '}
        </a>
      ))}
    </>
  );
};

export default Links;
