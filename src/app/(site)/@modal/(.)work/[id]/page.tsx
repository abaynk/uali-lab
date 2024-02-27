import { WorkModal } from "@/components/WorkModal";
import React from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
  return <WorkModal blogName={params.id} />;
};

export default page;
