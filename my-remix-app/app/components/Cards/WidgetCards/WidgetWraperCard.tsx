import { useState } from 'react';
import HeaderForRewards from './Headers/HeaderForRewards';
import HeaderForToken from './Headers/HeaderForToken';
import HeaderForValue from './Headers/HeaderForValue';
import ContentForRewards from './Content/ContentForRewards';
import ContentForToken from './Content/ContentForToken';
import ContentForValue from './Content/ContentForValue';

const WidgetHeader = ({ data, toggleAccordian }: any) => {
  return (
    <>
      {data.id === 'rewards-data' && (
        <HeaderForRewards
          data={data}
          toggleAccordian={toggleAccordian}
          itemId={data.items[0].id}
        />
      )}
      {data.id === 'token-data' && (
        <HeaderForToken
          data={data}
          toggleAccordian={toggleAccordian}
          itemId={data.items[0].id}
        />
      )}
      {data.id === 'value-data' && (
        <HeaderForValue
          data={data}
          toggleAccordian={toggleAccordian}
          itemId={data.items[0].id}
        />
      )}
    </>
  );
};

const WidgetContent = ({ data }: any) => {
  return (
    <>
      {data.id === 'rewards-data' && <ContentForRewards data={data} />}
      {data.id === 'token-data' && <ContentForToken data={data} />}
      {data.id === 'value-data' && <ContentForValue data={data} />}
    </>
  );
};

export default function WidgetWraperCard({ data }: any) {
  const [activeItemIds, setActiveItemIds] = useState<number[]>([]);

  const toggleAccordian = (id: number) => {
    if (activeItemIds.includes(id)) {
      setActiveItemIds(activeItemIds.filter((itemId) => itemId !== id));
    } else {
      setActiveItemIds([...activeItemIds, id]);
    }
  };

  return (
    <div className="bg-secondary rounded-md border-solid border-2 border-tertiary">
      <WidgetHeader data={data} toggleAccordian={toggleAccordian} />
      {activeItemIds.includes(data.items[0].id) && (
        <>
          <div className="py-2 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-md  text-textPrimary">{data.subHeader}</h1>
            </div>
          </div>
          <WidgetContent data={data} />
        </>
      )}
    </div>
  );
}
