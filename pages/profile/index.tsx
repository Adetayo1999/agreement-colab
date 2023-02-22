import { ArrowLeft } from "@/assets/svg";
import { ProfileSettings } from "@/components/profile-settings";
import { Layout } from "@/containers/layout";
import { ProtectedRoute } from "@/routes/protectedRoute";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <div className=" p-5 lg:p-10 pt-6 flex flex-col gap-y-5">
          <div className="">
            <button className="flex items-center gap-x-3 font-semibold text-lg">
              <span>
                <ArrowLeft />
              </span>
              <span>Go Back</span>
            </button>
          </div>
          <ProfileSettings />
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Profile;
