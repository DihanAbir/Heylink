import { useRouter } from "next/router";
import { useAuth } from "@/Hooks/getAuth";
import SmallLoader from "@/components/Loaders/SmallLoader";

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    if (loading) {
        return <SmallLoader />
    }

    if (user?._id && loading === false) {
        return children
    }
    else if (!user && loading === false) {
        router.push("/login");
    }
};

export default PrivateRoute;