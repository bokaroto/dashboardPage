import type { TSingleNetWorthCard } from '~/utils/types';

function NetWorthCard({ name, sum }: TSingleNetWorthCard) {
  return (
    <div className="bg-secondary p-6 rounded-md">
      <p className="text-textSecondary font-light text-xs">{name}</p>
      <p className="text-2xl text-textPrimary">${sum}</p>
    </div>
  );
}

export default NetWorthCard;
