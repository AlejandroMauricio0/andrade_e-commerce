import ProfileUSer from "../components/profile_info";
import AccountDetails from "../components/account_details";

function Profile() {
    return (
        <>
            <div className="container">
                <div className="container text-start m-2 pb-4">
                    <b className="text-end">
                        Perfil
                    </b>
                </div>
                <ProfileUSer />
                <br />  
                <AccountDetails />
            </div>
        </>
    );
}

export default Profile;