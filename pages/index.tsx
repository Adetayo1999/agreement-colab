import { HandEmoji, IconPlus } from "@/assets/svg";
import { AgreementTable } from "@/components/agreement-table";
import { Layout } from "@/containers/layout";
import { useModal } from "@/context";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  const { toggleCreateAgreement } = useModal();

  return (
    <Layout>
      <div className="p-5 lg:p-10 mt-8 ">
        <div className="flex  flex-col gap-y-6 lg:flex-row lg:justify-between md:items-center mb-10">
          <div className="flex items-center gap-x-4">
            <span className="inline lg:hidden">
              <HandEmoji scale={0.5} />
            </span>
            <span className="hidden lg:inline">
              <HandEmoji scale={0.7} />
            </span>
            <h3 className="tracking-[0.11em] font-bold lg:text-2xl">
              Welcome MIKE!
            </h3>
          </div>
          <div className="">
            <button
              className="flex items-center gap-x-5 border-[#34A853] border justify-center border-dashed rounded-[0.313rem] lg:h-[6rem] lg:w-[21rem] h-[4rem] w-[16rem]"
              onClick={toggleCreateAgreement}
            >
              <span className="inline lg:hidden">
                <IconPlus scale={0.5} />
              </span>
              <span className="hidden lg:inline">
                <IconPlus scale={0.7} />
              </span>
              <span className="text-sm lg:text-base font-semibold">
                Create Agreement
              </span>
            </button>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <AgreementTable />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
