// import AdminBoard from "@/components/adminboardpage/AdminBoard";
import ChatDetails from "@/components/adminboardpage/ChatDetails";
import Payment from "@/components/adminboardpage/Payment";
import UserProfile from "@/components/adminboardpage/UserProfile";

import dynamic from "next/dynamic";

const AdminBoard = dynamic(
  () => import("@/components/adminboardpage/AdminBoard"),
  { ssr: false }
);

const AdminBoardPage = () => {
  return (
    <>
      <AdminBoard />
    </>
  );
};

export default AdminBoardPage;
