import type { THeaderForToken } from '~/utils/types';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

function HeaderForToken({
  data,
  toggleAccordian,
  itemId,
}: {
  data: THeaderForToken;
  toggleAccordian: any;
  itemId: any;
}) {
  const { header } = data;
  return (
    <div className="py-2 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md bg-tertiary">
      <div className="sm:flex-auto">
        <div className="h-10 flex-shrink-0 flex items-center">
          <p className="text-textPrimary text-base">{header.name}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <p className="text-base font-semibold leading-6 text-textPrimary">
          ${header.sum}
        </p>
      </div>
      <button onClick={() => toggleAccordian(itemId)}>
        <ArrowUpIcon
          className="ml-4 h-4 w-4 flex-shrink-0 text-textTertiary"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default HeaderForToken;
