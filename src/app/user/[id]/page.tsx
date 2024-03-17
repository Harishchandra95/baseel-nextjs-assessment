"use client";
import CustomLoader from "@/components/CustomLoader";
import UserDetail from "@/components/UserDetail";
import { NO_DATA } from "@/constant";
import { UserConext } from "@/context/contextAPI";
import { DataType, UserIdParams } from "@/interface";
import { getUserDetail } from "@/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function User() {
  const { id } = useParams<UserIdParams>();
  const [userDetail, setUserDetail] = useState<DataType>();
  // Get User using id
  const getUserById = async (id: number | string) => {
    const getUser = await getUserDetail(id);
    if (getUser.errorMessage) {
      toast.error(getUser.errorMessage);
    }
    if (getUser.user) {
      setUserDetail(getUser.user);
    }
    return;
  };
  useEffect(() => {
    if (id) {
      getUserById(id);
    }
  }, []);

  if (!userDetail) {
    return <CustomLoader />;
  }
  return (
    <UserConext.Provider value={{ user: userDetail }}>
      <UserDetail />
    </UserConext.Provider>
  );
}