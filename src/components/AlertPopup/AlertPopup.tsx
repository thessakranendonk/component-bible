import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, TimesIcon } from '@patternfly/react-icons';

export interface AlertPopupProps {
  position: string;
  variant: string;
  variant_color: string;
  icon_color: string;
  text_color: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  alertVisible: boolean;
  closeable?: boolean;
}

const AlertPopup: React.FC<AlertPopupProps> = ({
  position,
  variant,
  variant_color,
  icon_color,
  text_color,
  title,
  onClick,
  closeable,
  alertVisible,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={alertVisible ? 'z-40 w-screen h-screen bg-black/20 absolute left-0 top-0' : ''} onClick={onClick}>
      <div className={`fixed z-50 max-w-lg flex justify-between rounded-lg shadow-md ${position}`}>
        {alertVisible && (
          <div className="flex flex-col  h-auto backdrop:blur-sm">
            <div className={`p-2 w-full self-end rounded-t-lg ${variant_color}`}>
              <div className="flex justify-end">
                <button className="bg-transparent border-none self-end" type="button" onClick={onClick}>
                  <TimesIcon className="w-8 h-8 text-white p-1" />
                </button>
              </div>
            </div>
            <div className={`grid grid-cols-8 rounded-b-lg py-6 px-8 bg-white`}>
              <div className="col-start-1 pt-1">
                {variant === 'danger' && <ExclamationCircleIcon className={`w-6 h-6 ${icon_color}`} />}
                {variant === 'warning' && <ExclamationTriangleIcon className={`w-6 h-6 ${icon_color}`} />}
                {variant === 'success' && <CheckCircleIcon className={`w-6 h-6 ${icon_color}`} />}
              </div>
              <p className={`col-start-2 col-span-8 text-md leading-4 pl-4 pt-1 ${text_color}`}>{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertPopup;
