import type { THeaderForRewards } from '~/utils/types';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

function HeaderForRewards({
  data,
  toggleAccordian,
  itemId,
}: {
  data: THeaderForRewards;
  toggleAccordian: any;
  itemId: any;
}) {
  const { header } = data;
  return (
    <div className="py-2 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md bg-tertiary">
      <div className="sm:flex-auto">
        <div className="h-10 flex-shrink-0 flex items-center">
          <img className="h-10 w-10 rounded-full" src={header.image} alt="" />
          <p className="text-textPrimary text-base ml-2">{header.name}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <p className="text-base font-semibold leading-6 text-textPrimary">
          ${header.sum}
        </p>
        <p className="text-textSecondary text-xs">
          Claimable: ${header.claimable}
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

export default HeaderForRewards;
