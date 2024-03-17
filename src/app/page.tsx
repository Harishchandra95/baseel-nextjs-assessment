"use client";
import CustomLoader from "@/components/CustomLoader";
import { Users } from "@/components/Users";
import { UserConext } from "@/context/contextAPI";
import { DataType } from "@/interface";
import { getUserList } from "@/utils";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState<DataType[]>([]);
  // Get User List
  const getUsers = async () => {
    const { users, errorMessage } = await getUserList();
    if (errorMessage) return toast.error(errorMessage);
    setUsers(users ? users : []);
  };
  useEffect(() => {
    getUsers();
  }, []);
  // meanwhile run the custom loader
  if (!users) return <CustomLoader />;
  return (
    <div>
      <UserConext.Provider value={{ users }}>
        <div>
          <Users />
        </div>
      </UserConext.Provider>
    </div>
  );
}