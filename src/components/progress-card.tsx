import { Card } from "./ui/card"
import CircularProgressBar from "@/components/circular-progress/circular-progress";


const ProgressCard = () => {
    return (
        <Card>
        <div className="flex flex-col items-center space-y-5 px-12 py-7">
          <p className="text-lg font-black tracking-wide">Progress</p>
          <CircularProgressBar percentage={10} />
          <div className="flex gap-12 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-sky-500" />
              <div className="leading-tight">
                <p className="font-bold">10</p>
                <p className="text-xs tracking-tight">Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-sky-500" />
              <div className="leading-tight">
                <p className="font-bold">10</p>
                <p className="w-full text-nowrap text-xs tracking-tight">
                  Total Tasks
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
}

export default ProgressCard;