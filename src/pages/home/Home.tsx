import { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { getUserDetail } from "../../services/authentication";
import { getToken } from "../../services/localStorageToken";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/reducers/userDetailReducer";
import { RootState } from "../../redux/store";
import { UserDetail } from "../../types/userDetail";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector<RootState>((state) => state.userDetail);

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getUserDetail(accessToken);
        dispatch(setUserDetails(data));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [dispatch, navigate]);

  return (
    <div>
      <NavBar userDetail={userDetail as UserDetail} />
    </div>
  );
}
