import { walletData } from '~/data/data';
import type { TSingleWalletCard } from '~/utils/types';

export default function Wallet() {
  return (
    <div
      className="bg-tertiary rounded-md border-solid border-2 border-tertiary
    "
    >
      <div className="py-2 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md">
        <div className="sm:flex-auto  text-textPrimary py-2">
          <h1 className="text-base font-semibold leading-6 text-gray-200">
            Wallet
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <h1 className="text-base font-semibold leading-6 text-gray-200">
            $222.20
          </h1>
        </div>
      </div>
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
                    className="px-8 py-3.5  text-left text-xs text-textTertiary font-light"
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
              <tbody className="divide-y divide-tertiary bg-secondary">
                {walletData.map((item: TSingleWalletCard) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0 text-left">
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
                            {item.name}
                          </div>
                          <div className="text-textSecondary font-light">
                            ${item.secondName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
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
    </div>
  );
}
