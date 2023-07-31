import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import {
  setDateRange,
  setStartDate,
  setEndDate,
  setIsLecturePublic,
} from "@/redux/slice/lectureInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const LectureSetting: React.FC = () => {
  const dateRange = useSelector(
    (state: RootState) => state.lectureInfo.dateRange,
  );
  const isLecturePublic = useSelector(
    (state: RootState) => state.lectureInfo.isLecturePublic,
  );
  const [startDate, endDate] = dateRange;
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setIsLecturePublic(!isLecturePublic));
  };

  return (
    <div className="flex relative gap-[69px]">
      <div className="flex gap-[12px] items-center ">
        <span className="text-black font-inter text-base font-semibold tracking-tighter leading-normal">
          수강 기간
        </span>
        <DatePicker
          placeholderText="Pick a date"
          locale={ko}
          selected={startDate}
          onChange={(update: [Date | null, Date | null]) => {
            dispatch(setDateRange(update));
            dispatch(setStartDate(update[0]));
            dispatch(setEndDate(update[1]));
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 cursor-pointer"
          dateFormat="yyyy.MM.dd"
        />
      </div>
      <div className="flex gap-[12px] items-center">
        <span className="text-black font-inter text-base font-semibold tracking-tighter leading-normal">
          강의 공개
        </span>
        <label htmlFor="toggle" className="relative block w-[51px] h-[26px]">
          <input
            type="checkbox"
            id="toggle"
            name="toggle"
            className="hidden"
            checked={isLecturePublic}
            onChange={handleToggle}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "26px",
              backgroundColor: isLecturePublic ? "#e5eeff" : "#f2f2f2",
              transition: "all 0.4s ease-in-out",
            }}
          ></div>
          <div
            className="absolute top-50%"
            style={{
              position: "absolute",
              top: "50%",
              left: isLecturePublic ? "calc(100% - 21px)" : "5px",
              width: "16px",
              height: "16px",
              borderRadius: "13px",
              backgroundColor: isLecturePublic ? "#337aff" : "#c5c5c5",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
              transition: "all 0.4s ease-in-out",
              transform: "translateY(-50%)",
            }}
          />
        </label>
      </div>
    </div>
  );
};
export default LectureSetting;