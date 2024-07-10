import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../../types/userDetail";
import { getUserDetail } from "../../services/authentication";
import { getToken } from "../../services/localStorageToken";
import { Content } from "../../components/content/Content";

export default function Home() {
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getUserDetail(accessToken);
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <NavBar userDetail={userDetail} />
      <Content/>
    </div>
  );
}
