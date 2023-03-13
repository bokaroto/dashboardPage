import DoughnutChart from './DoughnutWidget';
import type { TDoughnutChartModuleProps } from '~/utils/types';

function DoughnutChartModule({
  title,
  myData,
  currency = 'EUR',
}: TDoughnutChartModuleProps) {
  return (
    <div className="relative overflow-hidden border-2 border-solid rounded-md bg-tertiary border-tertiary">
      <div className="px-4 py-2 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md">
        <div className="py-2 sm:flex-auto text-textPrimary">
          <h1 className="text-base font-semibold leading-6 text-gray-200">
            {title}
          </h1>
        </div>
      </div>
      <div className="w-2/3">
        <DoughnutChart data={myData} cutout={80} currency={currency} />
      </div>
      <div className="absolute right-0 w-1/3 h-full py-2 top-14 bg-secondary">
        <ul>
          {myData.map((item, index) => (
            <li key={index} className="flex items-center justify-start pt-2">
              <img
                className="w-5 h-5 mr-2 rounded-full"
                src={item.imageSrc}
                alt=""
              />
              <div className="flex items-center justify-between w-full pr-6 text-textSecondary">
                <p>{item.label}</p>
                <p> {item.data.ratio}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DoughnutChartModule;
