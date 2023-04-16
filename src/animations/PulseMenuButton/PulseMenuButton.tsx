import clsx from 'clsx';

export const PulseMenuButton = () => {
  return (
    <div className="block">
      <div
        className={clsx(
          'group inline-block w-12 h-12 bg-teal-600 cursor-pointer rounded-full',
          'group-hover:transition',
          'hover:cursor-pointer hover:animate-pulse',
        )}
      >
        <div
          className={clsx(
            'mx-auto relative bg-red-400 w-8 h-1 rounded-md mt-3 mb-1.5',
            'absolute group-hover:w-1.5 group-hover:animate-slide',
          )}
        ></div>
        <div
          className={clsx(
            'mx-auto relative bg-red-400 w-8 h-1 rounded-md mb-1.5',
            'absolute group-hover:w-1.5 group-hover:animate-slide2',
          )}
        ></div>
        <div
          className={clsx(
            'mx-auto relative bg-red-400 w-8 h-1 rounded-md mb-1.5',
            'absolute group-hover:w-1.5 group-hover:animate-slide',
          )}
        ></div>
      </div>
    </div>
  );
};
