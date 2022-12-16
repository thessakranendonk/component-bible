import clsx from 'clsx';
import { TabHeaderProps } from '../types/interfaces.types';

const TabHeader: React.FC<TabHeaderProps> = ({
  navigationLinks,
  currentPath,
  tabDesignClassName,
  textColor,
  textActiveColor,
  underlineFromColor,
  underlineViaColor,
  underlineToColor,
}) => {
  return (
    <nav className="space-x-4 pointer-events-auto hidden md:flex">
      <ul
        className={clsx(
          'flex rounded-full bg-zinc-50/90 px-3 text-base font-light text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur',
          tabDesignClassName,
        )}
      >
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={clsx(
                'relative block whitespace-nowrap px-3 py-2 transition',
                currentPath === link.href ? textActiveColor : textColor,
              )}
            >
              {link.name}
              <span
                className={clsx(
                  'absolute inset-x-1 -bottom-px h-px',
                  currentPath === link.href &&
                    `bg-gradient-to-r  ${underlineFromColor} ${underlineViaColor} ${underlineToColor}`,
                  // example: `bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0`
                )}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabHeader;
