import { netWorthData } from '~/data/data';
import NetWorthCard from './Cards/NetWorthCard';

function NetWorthWidget() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {netWorthData.map((item) => (
        <NetWorthCard key={item.id} name={item.name} sum={item.sum} />
      ))}
    </div>
  );
}

export default NetWorthWidget;
