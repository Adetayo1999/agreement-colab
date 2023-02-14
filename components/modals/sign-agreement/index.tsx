import { SignButton } from "@/components/buttons/sign-button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import docuSign from "@/assets/images/docusign.svg";
import panda from "@/assets/images/panda.svg";
import { useModal } from "@/context";

export const SignAgreement = () => {
  const { isSignAgreementOpen, toggleSignAgreement } = useModal();

  useEffect(() => {
    if (isSignAgreementOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isSignAgreementOpen]);

  return (
    <Transition appear show={isSignAgreementOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleSignAgreement}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[38rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all min-h-[18.75rem] flex justify-center items-center flex-col">
                <div className="flex flex-col justify-center lg:flex-row w-full gap-3 lg:gap-5 flex-wrap mb-5 ">
                  <SignButton Icon={panda} />
                  <SignButton Icon={docuSign} />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={toggleSignAgreement}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
