import type { TContentForToken } from '~/utils/types';

function ContentForToken({ data }: { data: TContentForToken }) {
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
                  TOKEN
                </th>
                <th
                  scope="col"
                  className="px-8 py-3.5  text-center text-xs text-textTertiary font-light"
                >
                  BALANCE
                </th>
                <th
                  scope="col"
                  className="px-8 py-3.5  text-center text-xs text-textTertiary font-light"
                >
                  PRICE
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
                      <div className="h-10 flex-shrink-0 flex items-center">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-textPrimary font-light">
                          {item.token}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                    <div className="flex-col">
                      <p className="text-textSecondary text-xs font-light ml-2">
                        ${item.balance}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                    <p className="text-textSecondary text-xs font-light ">
                      ${item.price}
                    </p>
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

export default ContentForToken;
