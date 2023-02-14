import { data } from "@/mocks/agreement-mock";
import { currencyConverter } from "@/utils/currency-converter";
import { EditButton } from "../buttons/edit-button";
import { useModal } from "@/context";

const statuses = {
  accepted: "bg-[#E9FDE0] text-[#34A853] border-[#34A853]",
  pending: "bg-[#FFF9EC] text-[#EFA73B] border-[#FFA722]",
  rejected: "bg-[#FFEDED] text-[#F86A2D] border-[#FE5D5D]",
};

export const AgreementTable = () => {
  const { toggleSignAgreement } = useModal();

  return (
    <table className="w-full  border-collapse rounded-2xl  ">
      <thead className="">
        <tr className="bg-white h-[5.625rem]   shadow-md text-left border-b-[30px] border-[#F5F5F5] rounded-[0.9rem] border-collapse overflow-hidden">
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            ID
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Name
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Agreement Type
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Price
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Currency
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Phone
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Status
          </th>
          <th className="font-medium lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            className="mb-2 bg-white h-[5.625rem] border-b-[10px] border-[#F5F5F5]"
            key={item.id}
          >
            <td className="lg:px-6 px-4 text-sm lg:text-base  font-medium whitespace-nowrap">
              {item.id}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  font-medium whitespace-nowrap">
              {item.name}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  font-medium whitespace-nowrap">
              {item.agreement}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  font-medium whitespace-nowrap">
              {currencyConverter(item.amount)}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  uppercase font-medium whitespace-nowrap">
              {item.currency}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  font-medium whitespace-nowrap">
              {item.phone}
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
              <button
                className={`capitalize font-medium  rounded-full  border w-[8rem] h-[2rem] flex justify-center items-center text-sm ${
                  statuses[item.status]
                }`}
              >
                {item.status}
              </button>
            </td>
            <td className="lg:px-6 px-4 text-sm lg:text-base  whitespace-nowrap">
              <EditButton handleClick={toggleSignAgreement} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
