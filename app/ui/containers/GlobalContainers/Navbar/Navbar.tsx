import NavbarSM from './NavbarSM';
import NavbarLG from './NavbarLG';

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-center items-center w-full h-16 lg:h-[4.5rem] border-b border-borderPrimaryDark/10 bg-bgPrimaryDark">
      <div className="relative flex justify-between items-center w-full h-full p-4">
        <div>
          <a className="text-xl">CinergiaLogo</a>
        </div>
        <NavbarSM />
        <NavbarLG />
      </div>
    </nav>
  );
}
