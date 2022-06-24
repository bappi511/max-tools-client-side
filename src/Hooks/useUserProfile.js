import { useQuery } from "react-query";

const useUserProfile = (user) => {
    const email = user?.email;
    const {
        data: userProfile,
        isLoading,
        refetch,
    } = useQuery("userProfile", () =>
        fetch(`http://localhost:5000/user/${email}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    return [userProfile, isLoading, refetch];
};

export default useUserProfile;
