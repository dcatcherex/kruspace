import TestJson from "@/components/testJson"
import testData from "@/data/testJson.json"
import teaching from "@/data/teaching.json"
import DialogContainer from "@/components/library/dialog-container"



const page = () => {
  return (
    <section>page
        {/* <TestJson data={teaching}/>
        {testData.length} */}
        <DialogContainer currentCard={5}  />
    </section>
  )
}
export default page