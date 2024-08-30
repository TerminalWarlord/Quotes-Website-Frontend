import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
// import logo from '../../public/TerminalAI.png';


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    console.log(theme);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevState => {
            return prevState == 'light' ? 'dark' : 'light';
        })
    }
    return (
        <header className="bg-base-100">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to=".." relative='path' className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src='/TerminalAI.png' className="h-12 w-auto" style={{ filter: theme == 'light' ? 'none' : 'invert(1)' }} />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent-content"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-base-content">
                            Product
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-base-content/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-base-content">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-base-content/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-base-content hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="features" className="text-sm font-semibold leading-6 text-base-content">
                        Features
                    </Link>
                    <Link to="marketplace" className="text-sm font-semibold leading-6 text-base-content">
                        Marketplace
                    </Link>
                    <Link to="about" className="text-sm font-semibold leading-6 text-base-content">
                        About
                    </Link>
                    <label className="flex cursor-pointer gap-2" onClick={toggleTheme}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" defaultChecked={theme == 'light' ? false : true} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>

                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="auth" className="text-sm font-semibold leading-6 text-base-content">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-base-content/10">
                    <div className="flex items-center justify-between">
                        <Link to=".." className="-m-1.5 p-1.5">
                            <span className="sr-only">Quotes</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-base-content hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-base-content hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Link
                                    to="features"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base-content hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Features
                                </Link>
                                <Link
                                    to="marketplace"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base-content hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Marketplace
                                </Link>
                                <Link
                                    to="auth"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base-content hover:bg-base-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Company
                                </Link>
                            </div>
                            <div className="py-6">
                                <label className="flex cursor-pointer gap-2" onClick={toggleTheme}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5" />
                                        <path
                                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                    </svg>
                                    <input type="checkbox" value="synthwave" className="toggle theme-controller" defaultChecked={theme == 'light' ? false : true} />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="auth"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-base-content hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
