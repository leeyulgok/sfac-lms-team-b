"use client";

import React from "react";
import Link from "next/link";
import { Assignment } from "@/types/firebase.types";
import { useGetAssignment } from "@hooks/queries/useGetAssignment";

interface AssignmentNumberAdded extends Assignment {
  assignmentNumber: number;
}

const AssignmentLeftNavContent = () => {
  const assignmentData = useGetAssignment("");

  if (assignmentData.isLoading === false) {
    const assignment = assignmentData.data;
    const htmlContent = assignment?.map((assign: AssignmentNumberAdded) => (
      <li key={assign.assignmentNumber} className="list-none w-full p-[10px]">
        <Link href={"/assignment/" + assign.assignmentNumber}>
          {assign.title}
        </Link>
      </li>
    ));

    return htmlContent;
  }
};

export default AssignmentLeftNavContent;
