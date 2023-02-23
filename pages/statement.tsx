import {Header} from "@/components/header"
import {ArrowLeft} from "@/assets/svg"
import Link from "next/link"
import { Input } from "@/components/common/input"
import { Layout } from "@/containers/layout"
export const Statement = ( ) => {
    return (
        <Layout>
          <div>
         <div className="flex flex-col p-12 m-auto">
         <div className=" p-5 lg:p-10 pt-6 flex flex-col gap-y-5">
          <a>
            <Link href="/">
            <button className="flex items-center gap-x-3 font-semibold text-lg">
              <span>
                <ArrowLeft />
              </span>
              <span>Go Back</span>
            </button>
            </Link>
            </a>
          </div>

          <div className="m-auto ">
          
            
            <h2 className="font-extrabold text-center py-4"> PARTY 1 DOCUMENT</h2>
            <div className="flex flex-col gap-5 items-center">
            <Input 
              name="name"
              placeholder="Email"
              type="email"
              
            />
               <Input 
              name="name"
              placeholder="Company Name"
              type="text"
              
            />
             <Input 
              name="name"
              placeholder="Company Address"
              type="text"
              
            />

            <Input 
              name="zipcode"
              placeholder="ST Zip Code"
              type="text"
              
            />
            <span>
            <h4>Date</h4>
            <Input
            name = "date"
            placeholder="Date"
            type="text"
            />
            </span>
            <br />

            <h4>Services performed by</h4>
            <Input 
              name="name"
              placeholder="Company Name"
              type="text"
              
            />
             <Input 
              name="name"
              placeholder="Company Address"
              type="text"
              
            />

            <Input 
              name="zipcode"
              placeholder="ST Zip Code"
              type="text"
              
            />

            <br />
            <h4>Services performed for</h4>
            <Input 
              name="name"
              placeholder="Company Name"
              type="text"
              
            />
             <Input 
              name="name"
              placeholder="Company Address"
              type="text"
              
            />

            <Input 
              name="zipcode"
              placeholder="ST Zip Code"
              type="text"
              
            />
            <br />
            <h4>Currency</h4>
            <Input 
              name="name"
              placeholder="US Dollar"
              type="text"
              
            />
             <Input 
              name="amount"
              placeholder="Company Address"
              type="number"
              
            />
            <h4 className="font-extrabold"> SOW [000] for Agreement to Perform Consulting Services to [Client Name]</h4>
            </div>
            </div>
            <br />
            <span className="font-bold">This Statement of Work (SOW) is issued pursuant to the Consultant Services Master Agreement between [Client Name] (“Client”) and [Company Name] (“Contractor”), effective [Click to select date] (the “Agreement”). This SOW is subject to the terms and conditions contained in the Agreement between the parties and is made a part thereof. Any term not otherwise defined herein shall have the meaning specified in the Agreement. In the event of any conflict or inconsistency between the terms of this SOW and the terms of this Agreement, the terms of this SOW shall govern and prevail.
            </span> 
          <br />
          <span className="font-bold">
          This SOW # [000] (hereinafter called the “SOW”), effective as of [Click to select date], is entered into by and between Contractor and Client, and is subject to the terms and conditions specified below. The Exhibit(s) to this SOW, if any, shall be deemed to be a part hereof. In the event of any inconsistencies between the terms of the body of this SOW and the terms of the Exhibit(s) hereto, the terms of the body of this SOW shall prevail.
          </span>
          <br />
          <br/>
          <h4 className="font-bold">Period of Performance</h4>
      
          The Services shall commence on [Click to select date], and shall continue through [Click to select date].
          <br />
          <br />
          <h4 className="font-bold">
          Engagement Resources
          </h4>
          List names of resources and any key information about each.
          <br />
          <br />

          <h4 className="font-bold">Scope of Work </h4>

          <br />

          Contractor shall provide the Services and Deliverable(s) as follows:

          <br />
         
          Describe services and/or deliverables included in this SOW. 
          Deliverable Materials 
         
          If this is an SOW for deliverable work product, describe deliverables here. If this is an SOW for services that do not include specific deliverables, you might want to include a statement such as “There are no formal deliverables or work products defined in association with these services.”
          <br />
          <br />
          
          <h4 className="font-bold">Contractor Responsibilities </h4>
          <br />
          
          <h4 className="font-bold">Define contractor responsibilities. </h4>
          <br />
          <h4 className="font-bold"> Client Responsibilities </h4>
          <br />
          <h4 className="font-bold">Define client responsibilities. </h4>
          <br />
           <h4 className="font-bold">Fee Schedule</h4>
          <br />


          This engagement will be conducted on a Time & Materials basis. The total value for the Services pursuant to this SOW shall not exceed [$000] unless otherwise agreed to by both parties via the project change control procedure, as outlined within. A PCR will be issued specifying the amended value.</div>


          <div className="flex flex-col gap-3 items-center">
            <button className="bg-[#F6FFC0] text-black p-3 w-[200px] border-[5px] rounded-[0.625rem]  font-bold border-black">
              Save as Draft
            </button>

            <button className="bg-[#E1F4FB] text-black w-[200px] border-[5px] rounded-[0.625rem] border-black font-bold p-2"> Publish </button>
            <br />
            </div>
            
        </div>
        </Layout>
    )
}

export default Statement