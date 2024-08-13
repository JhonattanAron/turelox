import { useDispatch, useSelector } from "react-redux";
import ProfileHeader from "../../components/profile/HeaderProfile";
import Layout from "../../hocs/layouts/layout";
import { AppDispatch, RootState } from "../../store";
import Cookies from "js-cookie";
import { GetUserByIdThunk } from "../../redux/Thunks/UserThunks";
import { useEffect, useState } from "react";
import { selectUser } from "../../redux/Slices/AuthSlice";
import User from "../../interfaces/UserModel";

export default function ProfilePage() {
  const dispatch = useDispatch<AppDispatch>();
  const id = Cookies.get("user");
  const userData = useSelector((state: RootState) => selectUser(state));
  useEffect(() => {
    if (id) {
      dispatch(GetUserByIdThunk(id));
    }
  }, [dispatch, id]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  console.log(userData);

  return (
    <Layout>
      <ProfileHeader user={userData} />;
    </Layout>
  );
}
