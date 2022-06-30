import { useQuery } from "react-query";

const useUserProfile = (user) => {
    const email = user?.email;
    const {
        data: userInfo,
        isLoading,
        refetch,
    } = useQuery("userProfile", () =>
        fetch(`https://aqueous-sierra-90066.herokuapp.com/user/${email}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    return [userInfo, isLoading, refetch];
};

export default useUserProfile;
