export const HamburgerButton: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const genericHamburgerLine = `h-0.5 w-8 my-1.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex flex-col w-16 rounded justify-center items-center group -mr-6">
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'rotate-45 translate-y-3.5 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3.5 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </div>
  );
};
