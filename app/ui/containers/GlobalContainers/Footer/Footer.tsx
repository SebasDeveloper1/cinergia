/**
 * Footer Component
 *
 * A React component representing the footer of the application.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Footer component.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-bgSecondaryDark border-t-[1px] border-dark-500">
      <div className="flex justify-center items-center w-full h-full py-16 border-b-[4rem] border-dark-950">
        <div className="flex flex-col justify-center items-center gap-10 w-11/12 md:w-10/12 h-full">
          <div className="pb-3 border-b-[1px] border-primary-500">
            <a className="text-3xl">CinergiaLogo</a>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2 w-full h-full text-center">
              <span className="span-base text-dark-400 w-full">
                © 2023 Cinergia, Todos los derechos reservados.
              </span>
              <a
                href=""
                className="span-base text-primary-50 hover:text-primary-500 w-full"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
