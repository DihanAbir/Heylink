import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider/AuthProvider';
import VerifyRequestModal from '../../components/Modals/UserManagementModals/VerifyRequestModal';
import Loader from '../../components/loaders/Loader';

const PriveteRoute = ({ children }) => {
    const { userData, loading, openEmailVerifyModal, setOpenEmailVerifyModal } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (openEmailVerifyModal) {
        return <VerifyRequestModal />
    }

    if (userData?._id && loading === false) {
        if (userData?.verified === "false") {
            setOpenEmailVerifyModal(true)
        }
        else {
            return children
        }
    }
    else if (!userData && loading === false) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
};

export default PriveteRoute;