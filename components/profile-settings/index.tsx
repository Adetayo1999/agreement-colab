import Image from "next/image";
import userImage from "@/assets/images/user.png";
import { Input } from "../common/input";
import { RadioInput } from "../common/radio";

export const ProfileSettings = () => {
  return (
    <div className="lg:bg-white rounded-md lg:p-8">
      <div className="lg:w-[60%] mx-auto flex flex-col gap-y-6">
        <div className="flex gap-x-5 items-center">
          <Image
            src={userImage}
            alt="User Image"
            className="rounded-full"
            height={75}
            width={75}
            unoptimized
          />
          <h3 className="font-semibold text-xl">Edit Profile</h3>
        </div>
        <div className="">
          <form className="flex flex-col gap-y-20">
            <div className="">
              <div className="mb-2 text-lg">
                <h5 className="font-semibold">Personal Information</h5>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-6 ">
                  <Input name="name" placeholder="Mike" type="text" />
                  <div className="w-[21.25rem] flex gap-x-6">
                    <div className="flex gap-x-2">
                      <RadioInput inputName="gender" labelName="Male" />
                    </div>
                    <div className="flex gap-x-2">
                      <RadioInput inputName="gender" labelName="Female" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-6">
                  <Input name="email" placeholder="Email" type="text" />
                  <Input name="phone" placeholder="Phone" type="text" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-2 text-lg">
                <h5 className="font-semibold">Address Details</h5>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-6">
                  <Input name="area" placeholder="Area" type="text" />
                  <Input name="city" placeholder="City" type="text" />
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-6">
                  <Input name="state" placeholder="State" type="text" />
                  <Input name="pincode" placeholder="Pincode" type="text" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-2 text-lg">
                <h5 className="font-semibold">Other Details</h5>
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-6">
                <Input name="company" placeholder="Company" type="text" />
                <Input name="location" placeholder="Location" type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
