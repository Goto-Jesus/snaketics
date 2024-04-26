import IArrowRight from "@/assets/images/icons/arrowRightBlack.svg";

export const Link = () => {
  return (
    <a className="link" href="#">
      <span>Learn more</span>
      <img src={IArrowRight} alt="arrow right" />
    </a>
  );
};
