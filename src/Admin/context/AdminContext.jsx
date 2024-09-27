
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogoutFetchApi,
  VerifyAdminFetchApi,
} from "../../redux/admin/AdminThunk";
import { getAllCategories2 } from "../../redux/user/UserThunk";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
export const AdminProvider = createContext();

export default function AdminContext({ children }) {
  const dispatch = useDispatch();
  const [isToggleSidebar, setisToggleSidebar] = useState(false);
  const navigate = useNavigate();

  const adminLogout = () => {
    dispatch(adminLogoutFetchApi({ dispatch, navigate, toast }));
  };

  useEffect(() => {
    // alert(isToggleSidebar)
  }, [isToggleSidebar]);

  useEffect(() => {
    dispatch(getAllCategories2());
  });
  useEffect(() => {
    dispatch(VerifyAdminFetchApi());
  }, [dispatch]);

  return (
    <AdminProvider.Provider
      value={{
        isToggleSidebar,
        setisToggleSidebar,
        adminLogout,
      }}
    >
      {children}
    </AdminProvider.Provider>
  );
}
