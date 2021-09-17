import { useContext } from "react";
import { AuthContext } from "../App";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isLoggedIn, setAuth } = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = (data) => {
        // console.log(data);
        setAuth()
        history.push('/')
    }

    const handleLogout = () => {
        console.log(`Logout`);
        setAuth();
    }


    return (
        <div className="container">
            <h2>Register</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder="email"
                        {...register('email', { 
                            required: true,
                            maxLength: 30,
                        })}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                        {...register('password', { 
                            required: true,
                            minLength: 6,
                            maxLength: 30,
                        })}
                />
                {errors.password && <span>Invalid password</span>}

                {isLoggedIn ? (
                    <button type="button" onClick={handleLogout}>Log Out</button>
                ) : (
                    <input type="submit" />
                )}
            </form>
        </div>
    )
}

export default Register;