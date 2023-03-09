import type { TContentForRewards } from '~/utils/types';

function ContentForRewards({ data }: { data: TContentForRewards }) {
  const { items } = data;
  return (
    <div className="flow-root ">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full  bg-primary">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-8 py-3.5 text-left text-xs text-textTertiary font-light"
                >
                  POOL
                </th>
                <th
                  scope="col"
                  className="px-8 py-3.5  text-left text-xs text-textTertiary font-light"
                >
                  REWARDS
                </th>
                <th
                  scope="col"
                  className="px-8 py-3.5  text-center text-xs text-textTertiary font-light"
                >
                  VALUE
                </th>
              </tr>
            </thead>
            <tbody className=" bg-secondary">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center px-8">
                      <div className="h-5 flex items-center">
                        {item.poolImgs.map((img, index) => (
                          <img
                            key={index}
                            className="h-5 w-5 rounded-full"
                            src={img}
                            alt={img}
                          />
                        ))}
                      </div>
                      <div className="ml-4">
                        <div className="text-textPrimary font-light">
                          {item.pool}
                        </div>
                        <div className="text-textSecondary font-light">
                          ${item.poolPrice}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  text-center">
                    <div className="flex-col">
                      {item.rewards.map((reward, index) => (
                        <div className="flex mt-2 items-center" key={index}>
                          <img
                            className="h-5 w-5 rounded-full"
                            src={reward.image}
                            alt=""
                          />
                          <p className="text-textSecondary text-xs font-light ml-2">
                            {reward.name}
                          </p>
                          <p className="text-textSecondary text-xs font-light ml-2">
                            ${reward.sum}
                          </p>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                    <p className="text-textSecondary text-xs font-light ">
                      ${item.value}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContentForRewards;
