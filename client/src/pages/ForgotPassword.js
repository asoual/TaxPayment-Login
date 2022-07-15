import Header from "../components/Header"
import ForgotPassword from "../components/ForgotPassword"

export default function ForgotpasswordPage(){
    return(
        <>
             <Header
                heading="Forgot Password"
                linkName="Back to Login"
                linkUrl="/"
                />
              <ForgotPassword/>
        </>
    )
}