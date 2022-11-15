import React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, TimesIcon } from '@patternfly/react-icons';

export interface PopupProps {
  position: string;
  variant: string;
  variant_color: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  alertVisible: boolean;
  closeable?: boolean;
}

const Popup: React.FC<PopupProps> = ({ position, variant, variant_color, title, onClick, closeable, alertVisible }) => {
  // const [alertVisible, setAlertVisible] = useState(true);

  // const handleClose = () => setAlertVisible(false);

  // if (closeable) setTimeout(handleClose, 7000);

  return (
    // onClick event handler on the main div makes it possible to close the notification if a user clicks anywhere on the screen
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={alertVisible ? 'z-40 w-full h-full bg-black/20 absolute left-0 top-0' : ''} onClick={onClick}>
      <div className={`fixed z-50 flex justify-between h-max border-r-8 shadow-md ${position}`}>
        {alertVisible && (
          <div className="flex flex-col w-48 h-auto backdrop:blur-sm">
            <div className={`p-5 self-end border-radius ${variant_color}`}>
              <div className="w-48 flex justify-end">
                <button className="bg-transparent border-none self-end" type="button" onClick={onClick}>
                  <TimesIcon className="w-24 h-24 text-white p-8" />
                </button>
              </div>
            </div>
            <div className={`flex border-radius p-16 bg-white ${variant}_content`}>
              {variant === 'danger' && <ExclamationCircleIcon className={`w-24 h-24 p-8 ${variant_color}`} />}
              {variant === 'warning' && <ExclamationTriangleIcon className={`w-24 h-24 p-8 ${variant_color}`} />}
              {variant === 'success' && <CheckCircleIcon className={`w-24 h-24 p-8 ${variant_color}`} />}
              <p className="modal_message">{title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
