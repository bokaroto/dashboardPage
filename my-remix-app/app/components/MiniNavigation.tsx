import { Link } from '@remix-run/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function MiniNavigation() {
  return (
    <div>
      <nav className="sm:hidden" aria-label="Back">
        <Link
          to="#"
          className="flex items-center text-sm font-medium  text-textSecondary hover:text-textPrimary"
        >
          <ChevronLeftIcon
            className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-textSecondary"
            aria-hidden="true"
          />
          Back
        </Link>
      </nav>
      <nav className="hidden sm:flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div className="flex">
              <Link
                to="#"
                className="text-xs font-medium  text-textSecondary hover:text-textPrimary flex items-center justify-center"
              >
                <HomeIcon
                  className="mr-2 h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
                HOME
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-textSecondary"
                aria-hidden="true"
              />
              <Link
                to="#"
                className="ml-4 text-xs font-medium text-textSecondary hover:text-textPrimary"
              >
                ANALYTICS
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
