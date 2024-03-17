import { UserConext } from "@/context/contextAPI";
import { DataType } from "@/interface";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import CustomLoader from "./CustomLoader";
import { NO_DATA } from "@/constant";
const STATIC_PROFILE =
  "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg";
// Styled components for user profile
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ProfileCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProfileDetail = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;
const UserDetailTag = styled.div`
  margin: 40px;
`;
const ProfilePhoto = styled.img`
  width: 150px; /* Adjust as needed */
  height: 150px; /* Adjust as needed */
  border-radius: 50%; /* Makes it circular */
  object-fit: cover; /* Ensures the image covers the entire space */
`;
const ProfileGaurd = styled.div``;
export default function UserDetail() {
  const { user } = useContext<{ user?: DataType }>(UserConext);
  if (!user) {
    return <>{NO_DATA}</>;
  }
  return (
    <UserDetailTag>
      <ProfileContainer>
        <ProfileCard>
          <ProfileGaurd>
            <ProfilePhoto
              src={user.profile ? user.profile : STATIC_PROFILE}
              alt="Profile Photo"
            />
            <ProfileDetail>
              <h3>{user.username}</h3>
            </ProfileDetail>
          </ProfileGaurd>
          <ProfileDetail>
            <Label>Name:</Label> {user.name}
          </ProfileDetail>
          <ProfileDetail>
            <Label>Email:</Label> {user.email}
          </ProfileDetail>
          <ProfileDetail>
            <Label>Address:</Label>{" "}
            {`${user.address?.suite}, ${user.address?.street}, ${user.address?.city}, ${user.address?.zipcode}`}
          </ProfileDetail>
          <ProfileDetail>
            <Label>Phone:</Label> {user.phone}
          </ProfileDetail>
          <ProfileDetail>
            <Label>WebSite:</Label>{" "}
            <Link href={user.website}>{user.website}</Link>
          </ProfileDetail>
        </ProfileCard>
      </ProfileContainer>
    </UserDetailTag>
  );
}