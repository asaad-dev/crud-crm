import { useContext } from "react";
import { AuthContext } from "../App";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { setAuth } = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = (data) => {
        // console.log(data);
        setAuth()
        history.push('/')
    }
    
    return (
        <div className="container">
            <h2>Contact info</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder="Name"
                        {...register("Name", { 
                            required: true, 
                            maxLength: 15 
                        })
                        }  
                />
                {errors.name && <span>Name is required</span>}
                <input 
                    type="email" 
                    placeholder="Email"
                        {...register("email", { 
                            required: true, 
                            maxLength: 30, 
                        })
                        }  
                />
                {errors.email && <span>Invalid email</span>}
                <textarea 
                    cols="30" rows="10"
                    {...register("description", {
                        required: true,
                    })}>
                    Description
                </textarea>
                {errors.description && <span>Description is required</span>}
                <input 
                    type="string" 
                    placeholder="Category"
                        {...register("category", { 
                            required: true, 
                            maxLength: 12, 
                        })}  
                />
                {errors.category && <span>Invalid category</span>}
            </form>
        </div>
    )
}

export default Contact;