type dataProps = {
    data: {
        id:number;
        method:string;
        method_en:string;
        use:string;
        time:number;
    }[]
}

type TeachingCardProps = {
    // data: TeachingData[];
    data: {
      uid: string;
      method: string;
      title: string;
      content: string;
      time_recommend: string;
      use: string;
      min_time: number;
      max_time: number;
    }[];
  };

const TestJson = ({data}:TeachingCardProps) => {


    return (
    <div>
        
        {data.map((item)=>(
        <div key={item.uid}>
            <div>{item.method}</div>
        </div>
    ))}
    </div>
  )
}
export default TestJson