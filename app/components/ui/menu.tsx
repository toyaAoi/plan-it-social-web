import { Menu, Transition } from '@headlessui/react';
import { type ReactElement } from 'react';

export function StyledMenu({ button, children }: { button: any; children: ReactElement }) {
  return (
    <Menu>
      <div>
        <Menu.Button>{button}</Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondary text-primary shadow-lg ring-1 ring-black/5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
