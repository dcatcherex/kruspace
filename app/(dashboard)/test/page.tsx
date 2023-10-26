import TestJson from "@/components/testJson"
import testData from "@/data/testJson.json"
import teaching from "@/data/teaching.json"



const page = () => {
  return (
    <div>page
        <TestJson data={teaching}/>
        {testData.length}
    </div>
  )
}
export default page