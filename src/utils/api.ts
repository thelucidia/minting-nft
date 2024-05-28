import axiosConfig from "../services/axios-config";

export const checkMemberForTelegram = async(username: string) => {
  try {
    const response = await axiosConfig.post("/user/check-username-telegram", {username});
    const membership = response.data.membership as string;
    if (membership === 'none')
      return false;
    return true;
  } catch (error) {
    console.log('error in telegram check membership');
    return false;
  }
}

export const checkMemberForDiscord = async(username: string) => {
  try {
    const response = await axiosConfig.post("/user/check-username-discord", {username});
    const isMember = response.data.isMember as boolean;
    return isMember;
  } catch (error) {
    console.log('error in discord check membership');
    return false;
  }
}

export const checkFollowingTwitter = async(username: string) => {
  try {
    const response = await axiosConfig.post("/user/check-following", {username});
    const follows = response.data.follows as boolean;
    return follows;
  } catch (error) {
    console.log('error in Twitter following status');
    return false;
  }
}