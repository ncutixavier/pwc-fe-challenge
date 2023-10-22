import React from 'react';

const Modal = ({ isOpen, onClose, children, fullScreen = false }) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-60"></div>
            <div className={`z-50 ${fullScreen ? 'w-full h-full': ''} p-4 mx-auto bg-white rounded-lg shadow-lg`}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-10 sm:right-2 text-gray-500 hover:text-gray-700"
                    >
                        <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <div className="p-4 h-full overflow-auto">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
