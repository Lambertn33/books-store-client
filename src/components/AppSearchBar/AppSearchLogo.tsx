import logoImg from "../../assets/images/logo.png";

const AppSearchLogo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logoImg} width={35} />
      <span className="self-center whitespace-nowrap text-2xl text-primary font-semibold dark:text-white">
        Book Store
      </span>
    </div>
  );
};

export default AppSearchLogo;
