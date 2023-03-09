import { transactionHistoryData } from '~/data/data';
import type { TSingleTransactionHistoryCard } from '~/utils/types';

function TransactionHistory() {
  return (
    <div
      className="bg-tertiary rounded-md border-solid border-2 border-tertiary
    "
    >
      <div className="py-2 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md">
        <div className="sm:flex-auto  text-textPrimary py-2">
          <h1 className="text-base font-semibold leading-6 text-gray-200">
            TransactionHistory
          </h1>
        </div>
      </div>
      <div className="flow-root ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full table-auto bg-primary">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-8 py-3.5 text-left text-xs text-textTertiary font-light"
                  >
                    TRANSACTION ID
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3.5  text-left text-xs text-textTertiary font-light"
                  >
                    DATE
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3.5  text-center text-xs text-textTertiary font-light"
                  >
                    DETAILS
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3.5  text-center text-xs text-textTertiary font-light"
                  >
                    TXN FEE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tertiary bg-secondary">
                {transactionHistoryData.map(
                  (item: TSingleTransactionHistoryCard) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0 text-left">
                        <div className="flex items-center px-8">
                          <div className="text-textSecondary font-light">
                            {item.id}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                        <div className="flex-col">
                          <p className="text-textSecondary text-xs font-light ml-2">
                            {item.date}
                          </p>
                          <p className="text-textSecondary text-xs font-light ml-2">
                            {item.time}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <p className="text-textSecondary text-xs font-light ">
                          {item.details.action}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center flex-col">
                        <p className="text-textSecondary text-xs font-light ">
                          {item.txnFee}
                          {item.currency}
                        </p>
                        <p className="text-textSecondary text-xs font-light ">
                          ~${item.money}
                        </p>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
