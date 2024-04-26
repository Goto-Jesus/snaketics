import "./Navigation.scss";

const items = [
  {
    title: "About us",
    url: "#",
  },
  {
    title: "Features",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        {items.map((item) => (
          <li className="navigation__item" key={item.title}>
            <a href={item.url} className="navigation__link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
