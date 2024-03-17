import { UserDetailResponse, UsersListResponse } from "@/interface";
import {
  API_BASE_URL,
  STATUS_OK,
  NO_DATA,
  NO_DATA_STATUS,
  ERROR_MESSAGE,
} from "@/constant";
export const getUserList = async () => {
  const usersList: UsersListResponse = { users: [], errorMessage: "" };
  try {
    const getUsersResponse = await fetch(API_BASE_URL + "/users");
    if (getUsersResponse.status === STATUS_OK) {
      usersList.users = await getUsersResponse.json();
    }
    if (getUsersResponse.status === NO_DATA_STATUS) {
      usersList.errorMessage = NO_DATA;
    }
    if (getUsersResponse.statusText) {
      usersList.errorMessage = getUsersResponse.statusText;
    }
    return usersList;
  } catch (error) {
    usersList.errorMessage = ERROR_MESSAGE;
    usersList.error = new Error(ERROR_MESSAGE);
    return usersList;
  }
};

export const getUserDetail = async (id: number | string) => {
  const userDetailResponse: UserDetailResponse = { errorMessage: "" };
  try {
    const getUserDetailResponse = await fetch(API_BASE_URL + "/users/" + id);
    if (getUserDetailResponse.status === STATUS_OK) {
      const user = await getUserDetailResponse.json();
      userDetailResponse.user = user;
    }
    if (getUserDetailResponse.status === NO_DATA_STATUS) {
      userDetailResponse.errorMessage = NO_DATA;
    }
    if (getUserDetailResponse.statusText) {
      userDetailResponse.errorMessage = getUserDetailResponse.statusText;
    }
    return userDetailResponse;
  } catch (error) {
    userDetailResponse.error = new Error(ERROR_MESSAGE);
    userDetailResponse.errorMessage = ERROR_MESSAGE;
    return userDetailResponse;
  }
};
