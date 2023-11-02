import TestJson from "@/components/testJson"
import testData from "@/data/testJson.json"
import teaching from "@/data/teaching.json"
import DialogContainer from "@/components/library/dialog-container"
import TestCard from "@/components/testcard"
import CreateCard from "@/components/library/create-card"



const page = () => {
  return (
    <section>page
        {/* <TestJson data={teaching}/>
        {testData.length} */}
        <CreateCard />
        <TestCard />
    </section>
  )
}
export default page