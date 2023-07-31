import React, { useEffect, useState } from "react";
import { ICourseField, ILecture } from "@/hooks/queries/useGetCourseList";
import Element from "./Element";
import useSelectCourse from "@/hooks/classroom/useSelectCourse";

interface IProps {
  courseList: ICourseField[];
  setCurrentCourse: React.Dispatch<React.SetStateAction<any>>;
}

const CourseList = ({ courseList, setCurrentCourse }: IProps) => {
  // 체크하여 삭제할 항목 ID들
  const { selectedCourse, handleCurrentCourse } = useSelectCourse({
    courseList,
    setCurrentCourse,
  });

  return (
    // courseFiled 데이터 구조
    // courseData : {title: 'IT기본', createdAt: Timestamp, updatedAt: Timestamp}
    // courseId : "I7YsTuxOWvT1M2lakkAM"
    // lectureList : [{…}, {…}, {…}]
    // 2중 map, course순회 & course하위 lecture 순회
    <React.Fragment>
      {courseList.map((course: ICourseField, idx: number) => (
        <>
          <Element
            key={course.courseData.title}
            type="course"
            title={course.courseData.title}
            clickFn={() => handleCurrentCourse({ course, idx })!}
            isSelected={selectedCourse[idx]}
            uniqueId={course.courseId}
            childCount={course.lectureList.length}
          />
          {/* 선택된 lecture만 보이도록 */}
          {selectedCourse[idx] &&
            course.lectureList.map((lecture: ILecture) => (
              <Element
                key={lecture.lectureId}
                type="lecture"
                title={lecture.title}
                isSelected={selectedCourse[idx]}
                uniqueId={lecture.lectureId}
              />
            ))}
        </>
      ))}
    </React.Fragment>
  );
};

export default CourseList;
