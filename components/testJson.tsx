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
      id: number;
      methodTH: string;
      methodEN: string;
      titleTH: string;
      titleEN: string;
      contentTH: string;
      contentEN: string;
      timeRecommend: string;
      use: string;
      minTime: number;
      maxTime: number;
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